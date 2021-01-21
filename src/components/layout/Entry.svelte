<article class="entry">

	<slot />
	
</article>

<style lang="scss">

	.entry {
		margin-top: calc(3 * var(--global--spacing-vertical));
	    margin-bottom: calc(3 * var(--global--spacing-vertical));
	    
	    &:first-child {
		    margin-top: 0;
	    }
	    
	    &:last-child {
		    margin-bottom: 0;
	    }
	    
	}
	
</style>