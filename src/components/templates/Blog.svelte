{#if type}

	<header class="page-header alignwide">
	
		<h1 class="page-title">{type}: <span>{value}</span></h1>			
		
	</header>
	
{/if}

{#each posts as post}

	<Post post={post} />
	
{/each}

<script>

	export let posts = []
	export let type
	export let value
	
	import Post from '~/components/objects/Post'
	
</script>

<style lang="scss">

	.page-header {
	    border-bottom: 3px solid var(--global--color-border);
	    padding-bottom: calc(2 * var(--global--spacing-vertical));
	    max-width: var(--responsive--alignwide-width);
        margin-left: auto;
        margin-right: auto;
	}
	
	.page-title {
	    font-size: var(--global--font-size-page-title);
	    font-weight: var(--heading--font-weight-page-title);
	    line-height: var(--heading--line-height-h1);
	}
	
</style>