<blockquote><p><slot /></p></blockquote>

<style lang="scss">

	blockquote {
		position: relative;
		padding-left: 1em;
		border-left: none;
		
		:global(> *:first-child) {
			margin-top: 0;
		}
		
		:global(> *:last-child) {
			margin-bottom: 0;
		}
		
		p {
			letter-spacing: var(--heading--letter-spacing-h4);
			font-family: var(--quote--font-family);
			font-size: var(--quote--font-size);
			font-style: var(--quote--font-style);
			font-weight: var(--quote--font-weight);
			line-height: var(--quote--line-height);
		}
		
		&:before {
		    content: "“";
		    position: absolute;
		    font-size: var(--quote--font-size);
		    line-height: var(--quote--line-height);
		    left: 8px;
		}
	}
	
</style>