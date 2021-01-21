{#each posts as post}

	<Post post={post} />
	
{/each}

<script>

	export let posts = []
	
	import Post from '~/components/objects/Post'
	
</script>