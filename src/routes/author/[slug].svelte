<svelte:head>
   <title>{author}, Author Archives - {info.name}</title>
   <meta name="description" content="{info.description}" />
</svelte:head>

<Blog posts={posts} type="Author" value="{author}" />
	
<script context="module">

	import { getData, getAuthorName } from '~/library/api';

	export async function preload({ params, query }) {
		
		const posts = await getData('posts', {_embed: 1, 'filter[author_name]':  params.slug}, this)
	  	
	  	const author = posts[0] ? getAuthorName(posts[0]) : params.slug
	  	
		return { posts, author }
	}

</script>

<script>

	import Blog from '~/components/templates/Blog'
	import { getContext } from 'svelte';
	
	const info = getContext('info');
	export let author
	export let posts = []
	
</script>