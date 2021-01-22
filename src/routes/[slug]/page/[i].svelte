<svelte:head>
	<title>{postType}, Page {currentPage} - {info.name}</title>
	<meta name="description" content="{info.description}" />
</svelte:head>

<Blog posts={posts} totalPages={totalPages} currentPage={currentPage} root={root}  />
	
<script context="module">

	import { apiCall } from '~/library/api';

	export async function preload({ params, query }) {
		
		const { data, headers } = await apiCall(params.slug, {_embed: 1, page: params.i}, this, {}, true) 
		
		return { posts: data, totalPages: headers['x-wp-totalpages'], currentPage: parseInt(params.i), postType: params.slug.charAt(0).toUpperCase() + params.slug.slice(1), root: `/${params.slug}/` }
	}

</script>

<script>

	import Blog from '~/components/templates/Blog'
	import { getContext } from 'svelte';
	
	const info = getContext('info');
	export let posts = []
	export let totalPages = 1
	export let currentPage = 1
	export let postType = 'Blog'
	export let root = '/'
	
</script>