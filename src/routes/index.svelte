<svelte:head>
	{#if page}
		{@html page.yoast_head}
	{:else}
		<title>Blog - {info.name}</title>
	   <meta name="description" content="{info.description}" />
	{/if}
</svelte:head>

{#if page}
	<Single single={page} />
{:else}
	<Blog posts={posts} />
{/if}
	
<script context="module">

	import { getData } from '~/library/api';

	export async function preload({ params, query }) {
		
		try {
			const pages = await getData('pages', {_embed: null, slug: 'home'}, this)
			const page = pages[0];
		    if(!page) {
			    throw "No home found, fetch latest posts"
		    }
			return { page, posts: [] }
		} catch(err) {
			const posts = await getData('posts', {_embed: 1}, this) 
			return { page: null, posts }
		}
	}

</script>

<script>

	import Single from '~/components/templates/Single'
	import Blog from '~/components/templates/Blog'
	import { getContext } from 'svelte';
	
	const info = getContext('info');
	export let page
	export let posts = []
	
</script>