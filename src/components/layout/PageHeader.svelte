<header class="page-header alignwide" class:spaced>
	<h1 class="page-title">{title}</h1>
	<slot />
</header>

<style lang="scss">

	.page-header {
	    border-bottom: 3px solid var(--global--color-border);
	    padding-bottom: calc(2 * var(--global--spacing-vertical));
	    max-width: var(--responsive--alignwide-width);
        margin-left: auto;
        margin-right: auto;
        
        &.spaced {
	        margin-bottom: calc(3 * var(--global--spacing-vertical));
        }
	}
	
	.page-title {
	    font-size: var(--global--font-size-page-title);
	    font-weight: var(--heading--font-weight-page-title);
	    line-height: var(--heading--line-height-h1);
	}
	
</style>

<script>

	export let title
	export let spaced
	
</script>