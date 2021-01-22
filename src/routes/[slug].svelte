<svelte:head>
   <title>{post.yoast_title}</title>
	{#each post.yoast_meta as meta}
		<meta name={meta.name || meta.property} content="{meta.content}" />
	{/each}
</svelte:head>

<Single post={post} comments={comments} />
	
<script context="module">

	import { getPage, apiCall, getPost } from '~/library/api';

	export async function preload({ params, query }) {
		
		let post = await getPage(params.slug, this)
	    if(!post) {
			post = await getPost(params.slug, this)
			if(!post) {
				this.error(404, 'Not found');
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
	
	export let post
	export let comments = []
	
</script>