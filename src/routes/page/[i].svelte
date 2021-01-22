<svelte:head>
	<title>Blog, Page {currentPage} - {info.name}</title>
	<meta name="description" content="{info.description}" />
</svelte:head>

<Blog posts={posts} totalPages={totalPages} currentPage={currentPage}  />
	
<script context="module">

	import { apiCall } from '~/library/api';

	export async function preload({ params, query }) {
		
		const { data, headers } = await apiCall('posts', {_embed: 1, page: params.i}, this, {}, true) 
		
		return { posts: data, totalPages: headers['x-wp-totalpages'], currentPage: parseInt(params.i) }
	}

</script>

<script>

	import Blog from '~/components/templates/Blog'
	import { getContext } from 'svelte';
	
	const info = getContext('info');
	export let posts = []
	export let totalPages = 1
	export let currentPage = 1
	
</script>