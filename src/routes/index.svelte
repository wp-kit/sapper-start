<svelte:head>
	{#if page}
		<title>{page.yoast_title}</title>
		{#each page.yoast_meta as meta}
			<meta name={meta.name || meta.property} content="{meta.content}" />
		{/each}
	{:else}
	   <title>Blog - {info.name}</title>
	   <meta name="description" content="{info.description}" />
	{/if}
</svelte:head>

{#if page}
	<Single post={page} />
{:else}
	<Blog posts={posts} totalPages={totalPages} search={search} totalItems={totalItems}  />
{/if}
	
<script context="module">

	import { getPage, apiCall, getPreview } from '~/library/api';

	export async function preload({ params, query }) {
		
		let page
		if(query.preview && (query.p || query.page_id)) {
			if(query.page_id) {
				page = await getPreview('pages', query.page_id, this)
			} else {
				page = await getPreview('posts', query.p, this)
			}
			if(!page) {
			    this.error(404, 'Not found');
		    }
		} else {
			if(query.s) {
				const { data, headers } = await apiCall('posts', {_embed: 1, search: query.s}, this, {}, true) 
				return { page: null, posts: data, totalPages: headers['x-wp-totalpages'], totalItems: headers['x-wp-total'], search: query.s }
			} else {
				page = await getPage('home', this)
			    if(!page) {
				    const { data, headers } = await apiCall('posts', {_embed: 1}, this, {}, true) 
					return { page: null, posts: data, totalPages: headers['x-wp-totalpages'] }
			    }
			}
		}
		return { page, posts: [] }
	}

</script>

<script>

	import Single from '~/components/templates/Single'
	import Blog from '~/components/templates/Blog'
	import { getContext } from 'svelte';
	
	const info = getContext('info');
	export let page
	export let posts = []
	export let totalPages = 1
	export let totalItems = 1
	export let search
	
</script>