<blockquote class="wp-block-quote"><slot /></blockquote>

<style lang="scss">

	.wp-block-quote {
		position: relative;
		padding-left: 1em;
		border-left: none;
		
		:global(> *:first-child) {
			margin-top: 0;
		}
		
		:global(> *:last-child) {
			margin-bottom: 0;
		}
		
		:global(p) {
			letter-spacing: var(--heading--letter-spacing-h4);
			font-family: var(--quote--font-family);
			font-size: var(--quote--font-size);
			font-style: var(--quote--font-style);
			font-weight: var(--quote--font-weight);
			line-height: var(--quote--line-height);
		}
	}
	
</style>