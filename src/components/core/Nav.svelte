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
		
			{#each items as item}
	
				<li class="menu-item menu-item-type-post_type menu-item-object-page">
				
					<a href="{new URL(item.url).pathname}">{item.title}</a>
					
					{#if item.child_items.length}
					
						<button class="sub-menu-toggle" aria-expanded="false">
						
							<span class="icon-plus">
						
								<svg class="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z" fill="currentColor"></path></svg>
								
							</span>
								
							<span class="icon-minus">
							
								<svg class="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 11h12v2H6z" fill="currentColor"></path></svg>
							
							</span>
							
							<span class="screen-reader-text">Open menu</span>
							
						</button>
						
						<ul class="sub-menu">
						
							{#each item.child_items as child}
	
								<li class="menu-item menu-item-type-post_type menu-item-object-page">
								
									<a href="{new URL(child.url).pathname}">{child.title}</a>
									
								</li>
								
							{/each}
						
						</ul>
						
					{/if}
					
				</li>
				
			{/each}
		
		</ul>
		
	</div>	
	
</nav>

<script>

	export let items = []
	
</script>

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
	    
	    .sub-menu {
		    margin: 0;
		    padding: 0;
		    list-style: none;
		    margin-left: var(--primary-nav--padding);
		    border: 1px solid var(--primary-nav--border-color);
		    
		    .menu-item > a {
			    padding: calc(1.25 * var(--primary-nav--padding)) var(--primary-nav--padding);
			    display: block;
			    font-size: var(--primary-nav--font-size-sub-menu-mobile);
			    font-style: var(--primary-nav--font-style-sub-menu-mobile);
			}
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
			
				.sub-menu-toggle {
				    display: flex;
				    height: calc(2 * var(--primary-nav--padding) + 1.15em + 1px);
				    width: 44px;
				    padding: 0;
				    justify-content: center;
				    align-items: center;
				    background: transparent;
				    color: currentColor;
				    border: none;
				    
				    .icon-plus, .icon-minus {
						height: 100%;
						display: flex;
						align-items: center;
				    }
				    
				    .icon-minus, ~ ul {
					    display: none;
				    }
				    
				}
				
				&:hover .sub-menu-toggle {
					    
				    .icon-plus {
					    display: none;
				    }
				    
				    .icon-minus {
					    display: flex;
				    }
				    
				    ~ ul {
					    display: block;
				    }
				    
			    }
				
			}
			
			> li > .sub-menu {
				position: relative;
			}
			
			@media only screen and (min-width: 30.125rem) {
			
				> li > .sub-menu {
				    left: 0;
				    margin: 0;
				    min-width: max-content;
				    position: absolute;
				    top: 100%;
				    padding-top: 3px;
				    transition: all 0.5s ease;
				    z-index: 88888;
				    
				    li {
					    background: var(--global--color-background);
					}
					
					&:before, &:after {
						content: "";
					    display: block;
					    position: absolute;
					    width: 0;
					    top: -10px;
					    left: var(--global--spacing-horizontal);
					    border-style: solid;
					    border-color: var(--primary-nav--border-color) transparent;
					    border-width: 0 7px 10px 7px;
					}
					
					&:after {
						top: -9px;
						border-color: var(--global--color-background) transparent;
					}
				}
				
			}
		}
	    
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
		    
		    > ul > .menu-item > a + .sub-menu-toggle {
			    margin-left: calc(5px - var(--primary-nav--padding));
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
				    align-items: center;
				    
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
			
			.sub-menu .menu-item > a {
				font-size: var(--primary-nav--font-size-sub-menu);
				font-style: var(--primary-nav--font-style);
			}
		}
		
	}
	
</style>

