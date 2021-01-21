import { query } from './utils';
import * as blocks from './blocks';

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

export async function getData(endpoint, params = {}, preload = null, callback) {

   const args = Object.keys(params).length ? '?' + query(params) : '';
   const url = _host + (endpoint !== '' && !endpoint.startsWith('acf/') ? _api + endpoint : endpoint) + args;

   const req = await (preload ? preload.fetch(url) : fetch(url));

   callback && callback(req)

   const res = await req.json();

   return res;
};

export function getBlockNameFromTitle(block) {
    block = (block||'')
    	.split('/')
    	.pop()
		.toLowerCase()
        .replace(/(\b|-)\w/g, (m) => m.toUpperCase().replace(/-/,''));
    return block;
}

export function getBlock(block, page = null, index = null) {
	return blocks[getBlockNameFromTitle(block.name)]
}

export function getCategory(data) {
	return data._embedded ? data._embedded['wp:term'][0][0] : null
}

export function getAuthorName(data) {
   return data._embedded ? data._embedded['author'][0]?.name : null
}

export function getNiceDate(d) {
	const date = new Date(d)
	return `${fullMonths[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}





