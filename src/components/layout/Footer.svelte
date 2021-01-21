<footer id="colophon" class="site-footer" role="contentinfo">

	{#if nav?.items?.length}
		<nav aria-label="Secondary menu" class="footer-navigation">
			<ul class="footer-navigation-wrapper">
				{#each nav.items as item}
					<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5">
						<a href="{new URL(item.url).pathname}"><span>{item.title}</span></a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}

	<div class="site-info">
	  <div class="site-name">
	    Rest Kit </div>
	  <div class="powered-by">
	    Proudly powered by <a href="https://wordpress.org/">WordPress</a>. </div><!-- .powered-by -->
	
	</div>
	
</footer>

<script>

	export let nav = {
		items: []
	}
	
</script>

<style lang="scss">

	.site-footer {
		max-width: var(--responsive--alignwide-width);
	    padding-top: 0;
	    padding-bottom: calc(1.7 * var(--global--spacing-vertical));
	    margin-left: auto;
	    margin-right: auto;
	
		& > .site-info {
		    padding-top: var(--global--spacing-vertical);
		    color: var(--footer--color-text);
		    font-family: var(--footer--font-family);
		    font-size: var(--footer--font-size);
		    line-height: var(--global--line-height-body);
		    border-top: 3px solid var(--global--color-border);
		
			.site-name {
			    text-transform: var(--branding--title--text-transform);
			    font-size: var(--branding--title--font-size);
			}
	
			.powered-by {
			    margin-top: calc(0.5 * var(--global--spacing-vertical));
			}
			
			a {
			    color: var(--footer--color-link);
			    
			    &:link, &:visited, &:active {
				    color: var(--footer--color-link);
			    }
			}
			
		}
	
		&:before, &:after {
		    content: "";
		    display: table;
		    table-layout: fixed;
		}
		
		.footer-navigation {
		    margin-top: calc(2 * var(--global--spacing-vertical));
		    margin-bottom: var(--global--spacing-vertical);
		    color: var(--footer--color-text);
		    font-size: var(--global--font-size-xs);
		    font-family: var(--footer--font-family);
		}
		
		.footer-navigation-wrapper {
		    display: flex;
		    justify-content: center;
		    flex-wrap: wrap;
		    list-style: none;
		    padding-left: 0;
		    
		    li {
			    display: inline;
			    line-height: 3;
			    
			    a {
				    padding: calc(1.25 * var(--primary-nav--padding)) var(--primary-nav--padding);
				    transition: transform 0.1s ease;
				    color: var(--footer--color-link);
				    
				    &:link, &:visited {
					    color: var(--footer--color-link);
				    }
				}
			}
		}
	
	}
	
	@media only screen and (min-width: 30.125rem) {
		
		:global(.site-footer > *) {
		    margin-top: var(--global--spacing-vertical);
		    margin-bottom: var(--global--spacing-vertical);
		}
		
	}
	
	@media only screen and (min-width: 51.375rem) {
		
		.site-footer > .site-info {
		    display: flex;
		    align-items: center;
		    
		    .powered-by {
			    margin-top: initial;
			    margin-left: auto;
			}
		}
		
	}
	
</style>