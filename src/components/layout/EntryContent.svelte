<div class="entry-content" class:spaced>
	
	<slot />
	
</div>

<script>

	export let spaced = false
	
</script>

<style lang="scss">

	.entry-content {
		margin-bottom: 0;
	    
	    &:before {
		    content: "";
		    display: table;
		    table-layout: fixed;
		}
		
		&:after {
			clear: both;
		}
		
		:global(> *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.wp-block-separator):not(.woocommerce)) {
		    max-width: var(--responsive--aligndefault-width);
		    margin-left: auto;
		    margin-right: auto;
		}
		
		:global(> *) {
			margin-top: var(--global--spacing-vertical);
			margin-bottom: var(--global--spacing-vertical);
		}
		
		:global(> *:first-child) {
			margin-top: 0;
		}
		
		:global(> *:last-child) {
			margin-bottom: 0;
		}
		
		&.spaced {
			margin-top: var(--global--spacing-vertical);
			margin-bottom: var(--global--spacing-vertical);
		    font-family: var(--entry-content--font-family);
		    margin-right: auto;
		    margin-left: auto;
		}
	}
	
</style>