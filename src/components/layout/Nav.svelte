<nav id="site-navigation" class="primary-navigation" role="navigation" aria-label="Primary menu">
		
	<div class="menu-button-container">
		
		<button id="primary-mobile-menu" class="button" aria-controls="primary-menu-list" aria-expanded="false">
			
			<span class="dropdown-icon open">Menu					
				<svg class="svg-icon" width="24" height="24" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 6H19.5V7.5H4.5V6ZM4.5 12H19.5V13.5H4.5V12ZM19.5 18H4.5V19.5H19.5V18Z" fill="currentColor"></path></svg>				
			</span>
			
			<span class="dropdown-icon close">Close					
				<svg class="svg-icon" width="24" height="24" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 10.9394L5.53033 4.46973L4.46967 5.53039L10.9393 12.0001L4.46967 18.4697L5.53033 19.5304L12 13.0607L18.4697 19.5304L19.5303 18.4697L13.0607 12.0001L19.5303 5.53039L18.4697 4.46973L12 10.9394Z" fill="currentColor"></path></svg>				
			</span>
		
		</button>
	
	</div>
	
	<div class="primary-menu-container">
	
		<ul id="primary-menu-list" class="menu-wrapper">
	
			<li id="menu-item-5" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5">
			
				<a href="http://wp.fd.kode.site/sample-page/">Sample Page</a>
				
			</li>
		
		</ul>
		
	</div>	
	
</nav>

<style lang="scss">

	.primary-navigation {
	    position: absolute;
	    top: var(--global--admin-bar--height);
	    right: 0;
	    color: var(--primary-nav--color-text);
	    font-size: var(--primary-nav--font-size);
	    line-height: 1.15;
	    margin-top: 0;
	    margin-bottom: 0;
	    
	    > .primary-menu-container {
		    position: fixed;
		    visibility: hidden;
		    opacity: 0;
		    top: 0;
		    right: 0;
		    bottom: 0;
		    left: 0;
		    padding-top: calc(var(--button--line-height) * var(--primary-nav--font-size-button) + 42px + 5px);
		    padding-left: var(--global--spacing-unit);
		    padding-right: var(--global--spacing-unit);
		    padding-bottom: var(--global--spacing-horizontal);
		    background-color: var(--global--color-background);
		    transition: all 0.15s ease-in-out;
		    transform: translateY(var(--global--spacing-vertical));
		}
		
		> div > .menu-wrapper {
		    display: flex;
		    justify-content: flex-start;
		    flex-wrap: wrap;
		    list-style: none;
		    margin: 0;
		    max-width: none;
		    padding-left: 0;
		    position: relative;
		    
		    li {
			    display: block;
			    position: relative;
			    width: 100%;
			}
		}
		
		a {
			display: block;
			font-family: var(--primary-nav--font-family-mobile);
			font-size: var(--primary-nav--font-size-mobile);
			font-weight: var(--primary-nav--font-weight);
			padding: var(--primary-nav--padding) 0;
			text-decoration: none;
			
			&:link, &:visited {
				color: var(--primary-nav--color-link-hover)
			}
			
			&:hover {
			    text-decoration: underline;
			    text-decoration-style: dotted;
			}
		}
	}
	
	.menu-button-container {
	    display: none;
	    justify-content: space-between;
	    position: absolute;
	    right: 0;
	    padding-top: calc(0.5 * var(--global--spacing-vertical));
	    padding-bottom: calc(0.25 * var(--global--spacing-vertical));
	}
	
	@media only screen and (min-width: 30.125rem) {
		
		.primary-navigation {
		    position: relative;
		    margin-left: auto;
		    
		    > .primary-menu-container {
			    visibility: visible;
			    opacity: 1;
			    position: relative;
			    padding: 0;
			    background-color: transparent;
			    overflow: initial;
			    transform: none;
			    
			    > ul > .menu-item {
				    display: flex;
				    
				    > a {
					    padding-left: var(--primary-nav--padding);
					    padding-right: var(--primary-nav--padding);
					}
				}
			
			}
			
			.primary-menu-container {
			    margin-right: calc(0px - var(--primary-nav--padding));
			    margin-left: calc(0px - var(--primary-nav--padding));
			}
			
			> div > .menu-wrapper li {
			    margin: 0;
			    width: inherit;
			}
			
			a {
			    display: block;
			    font-family: var(--primary-nav--font-family);
			    font-size: var(--primary-nav--font-size);
			    font-weight: var(--primary-nav--font-weight);
			}
		}
		
	}
	
</style>

