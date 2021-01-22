<svelte:head>
   <title>{tag} Archives - {info.name}</title>
   <meta name="description" content="{info.description}" />
</svelte:head>

<Blog posts={posts} type="Tag" value="{tag}" />
	
<script context="module">

	import { apiCall, getTag } from '~/library/api';

	export async function preload({ params, query }) {
		
		const posts = await apiCall('posts', {_embed: 1, 'filter[tag_name]':  params.slug}, this)
	  	
	  	const tag = posts[0] ? getTag(posts[0]).name : params.slug
	  	
		return { posts, tag }
	}

</script>

<script>

	import Blog from '~/components/templates/Blog'
	import { getContext } from 'svelte';
	
	const info = getContext('info');
	export let tag
	export let posts = []
	
</script>