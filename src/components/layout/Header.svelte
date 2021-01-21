<a class="skip-link screen-reader-text" href="#content">Skip to content</a>

<header id="masthead" class="site-header has-title-and-tagline" role="banner">

	<div class="site-branding">
	
	  <p class="site-title"><a href="/">Rest Kit</a></p>
	
	  <p class="site-description">Just another WordPress site</p>
	
	</div>
	
	<Nav />

</header>

<script type="lang">

	import Nav from '~/components/layout/Nav'
	
</script>

<style lang="scss">

	.screen-reader-text {
	    border: 0;
	    clip: rect(1px, 1px, 1px, 1px);
	    clip-path: inset(50%);
	    height: 1px;
	    margin: -1px;
	    overflow: hidden;
	    padding: 0;
	    position: absolute !important;
	    width: 1px;
	    word-wrap: normal !important;
	    word-break: normal;
	}
	
	.site-header {
		max-width: var(--responsive--alignwide-width);
		margin-left: auto;
		margin-right: auto;
        display: flex;
		align-items: flex-start;
		flex-wrap: wrap;
		row-gap: var(--global--spacing-vertical);
	}
	
	.site-branding {
		color: var(--branding--color-text);
		
		&:last-child {
		    margin-right: 0;
		    width: 100%;
		    text-align: center;
		}
	}
	
	.site-title {
	    color: var(--branding--color-link);
	    font-family: var(--branding--title--font-family);
	    font-size: var(--branding--title--font-size-mobile);
	    letter-spacing: normal;
	    text-transform: var(--branding--title--text-transform);
	    line-height: var(--global--line-height-heading);
	    margin-bottom: calc(var(--global--spacing-vertical) / 6);
	    
	    text-decoration-color: var(--global--color-secondary);
	}
	
	header {
		max-width: var(--global--spacing-measure);
	}
	
	.site-description {
	    color: currentColor;
	    font-family: var(--branding--description--font-family);
	    font-size: var(--branding--description--font-size);
	    line-height: 1.4;
	}
	
	@media only screen and (min-width: 30.125rem) {
	
		.site-header {
			padding-bottom: calc(3 * var(--global--spacing-vertical));
			padding-top: calc(var(--global--spacing-vertical) / 0.75);
		}
		
		.site-title {
		    font-size: var(--branding--title--font-size);
		}
		
		.site-branding {
		    margin-right: initial;
		    margin-top: 4px;
		}
		
	}
	
	@media only screen and (min-width: 51.375rem) {
		
		.site-header {
		    padding-top: calc(2.4 * var(--global--spacing-vertical));
		}
		
	}

</style>