import { query, getComponentName } from './utils';

const _host = WP_API;
const _api = 'wp/v2/';

const fullMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const config = {
   host: _host,
   api: _api
}

export async function getPreview(endpoint, id, preload = null) {
	const url = `/api/posts?endpoint=${endpoint}&id=${id}&_embed=1`
	const res = await (preload ? preload.fetch(url) : fetch(url));
	const post = await res.json()
	return await getRelatedData(post, preload)
}

export async function apiCall(endpoint, params = {}, preload = null, opts = {}, returnHeaders = false) {

   const args = Object.keys(params).length ? '?' + query(params) : '';
   const url = _host + (endpoint !== '' && endpoint.split('/').length <= 2 ? _api + endpoint : endpoint) + args;

   const req = await (preload ? preload.fetch(url, opts) : fetch(url, opts));

   const data = await req.json();
   
   const headers = Object.fromEntries(req.headers.entries())

   return returnHeaders ? { headers, data } : data;
};

export async function getPage(slug, preload = null) {
	const pages = await apiCall('pages', {_embed: 1, slug: slug}, preload)
	return await getRelatedData(pages[0], preload)
}

export async function getPost(slug, preload = null) {
	const posts = await apiCall('posts', {_embed: 1, slug: slug}, preload)
	return await getRelatedData(posts[0], preload)
}

export function getCategory(data) {
	return data._embedded && data._embedded['wp:term'] ? data._embedded['wp:term'][0][0] : null
}

export function getTag(data) {
	return data._embedded && data._embedded['wp:term'] ? data._embedded['wp:term'][1][0] : null
}

export function getAuthorName(data) {
   return data._embedded ? data._embedded['author'][0]?.name : null
}

export function getNiceDate(d) {
	const date = new Date(d)
	return `${fullMonths[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

export function getNiceDateTime(d) {
	const date = new Date(d)
	const str = getNiceDate(d)
	return `${str} at ${date.getHours() % 12}:${date.getMinutes()} ${date.getHours() > 12 ?'PM' : 'AM'}`
}

export async function createEntry(formId, data) {
	
	const res = await fetch('/api/forms', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({data, formId})
	})
	
	if(!res.ok) {
		throw "Entry could not be created"
	}
	
	return await res.json()
	
}

export async function createComment(data) {
	
	const res = await fetch('/api/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	
	if(!res.ok) {
		const json = await res.json()
		throw json?.message || "Comment could not be created"
	}
	
	return await res.json()
	
}

async function getFormData(block, route) {
	
	const formId = block.attrs.formId;
	
	block.form = await (await route.fetch(`/api/forms?formId=${formId}`)).json()
    
    return block;
	
}

async function getRelatedData(post, route) {
	
	if(post) {
		
		post.gblocks = await Promise.all(post.gblocks.map(async block => {
			switch(getComponentName(block.blockName)) {
				case 'Form':
					block = await getFormData(block, route);
				break;
			}
			return block
		}))
		
	}
	
	return post;
    
}
