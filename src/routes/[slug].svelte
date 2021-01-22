<svelte:head>
	{#if post}
		<title>{post.yoast_title}</title>
		{#each post.yoast_meta as meta}
			<meta name={meta.name || meta.property} content="{meta.content}" />
		{/each}
	{:else}
	   <title>{postType} Archives - {info.name}</title>
	   <meta name="description" content="{info.description}" />
	{/if}
</svelte:head>

{#if post}
	<Single post={post} comments={comments} />
{:else}
	<Blog posts={posts} totalPages={totalPages} root={root}  />
{/if}
	
<script context="module">

	import { getPage, apiCall, getPost } from '~/library/api';

	export async function preload({ params, query }) {
		
		let post = await getPage(params.slug, this)
	    if(!post) {
			post = await getPost(params.slug, this)
			if(!post) {
				const { data, headers } = await apiCall(params.slug, {_embed: 1}, this, {}, true) 
				if(!data.length) {
					this.error(404, 'Not found');
				}
				return { page: null, posts: data, totalPages: headers['x-wp-totalpages'], postType: params.slug.charAt(0).toUpperCase() + params.slug.slice(1), root: `/${params.slug}/` }
			}
	  	}
	  	
	  	let comments = []
	  	
	  	if( post.comment_status === 'open' ) {
		  	
			comments = await apiCall('comments', {post: post.id, order: 'asc'}, this)
		  	
	  	}
	  	
		return { post, comments }
	}

</script>

<script>

	import Single from '~/components/templates/Single'
	import Blog from '~/components/templates/Blog'
	import { getContext } from 'svelte';
	
	const info = getContext('info');
	export let post
	export let comments = []
	export let posts = []
	export let totalPages = 1
	export let postType = 'Blog'
	export let root = '/'
	
</script>