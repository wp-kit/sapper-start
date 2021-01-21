<svelte:head>
   <title>{category} Archives - {info.name}</title>
   <meta name="description" content="{info.description}" />
</svelte:head>

<Blog posts={posts} type="Category" value="{category}" />
	
<script context="module">

	import { getData, getCategory } from '~/library/api';

	export async function preload({ params, query }) {
		
		const posts = await getData('posts', {_embed: 1, 'filter[category_name]':  params.slug}, this)
	  	
	  	const category = posts[0] ? getCategory(posts[0]).name : params.slug
	  	
		return { posts, category }
	}

</script>

<script>

	import Blog from '~/components/templates/Blog'
	import { getContext } from 'svelte';
	
	const info = getContext('info');
	export let category
	export let posts = []
	
</script>