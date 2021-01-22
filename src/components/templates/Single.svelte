<Entry>

	<header class="entry-header alignwide">
		
		<h1 class="entry-title">{post.title.rendered}</h1>	
		
		<Thumbnail featured={post._embedded['wp:featuredmedia']} />
		
	</header>
	
	<EntryContent>
	
		{#if !post.gblocks?.length}
			{@html post.content.rendered}
		{:else}
			{ #if post.gblocks.length }
			    { #each post.gblocks as block }
			        <svelte:component this="{getBlock(block.blockName)}" data="{block}" />
			    { /each }
			{ /if }
		{/if}
	
	</EntryContent>
	
	{#if !isPage}
	
		<footer class="entry-footer default-max-width">
			
			<div class="posted-by">
			
				<span class="posted-on">Published 
					<time class="entry-date published updated" datetime="{post.date}">{getNiceDate(post.date)}</time>
				</span>
				
				<span class="byline">By <a href="/author/{getAuthorName(post)}/" rel="author">{getAuthorName(post)}</a></span>
				
			</div>
			
			<div class="post-taxonomies">
			
				{#if category}
					<span class="cat-links">Categorized as <a href="/category/{category?.slug}/" rel="category tag">{category?.name}</a> 
					</span>
				{/if}
				
				{#if tag}
					<span class="tags-links">Tagged <a href="/tag/{tag?.slug}/" rel="tag">{tag?.name}</a></span>
				{/if}
				
			</div>	
			
		</footer>
		
	{/if}
	
	{#if showComments} 
	
		<Comments comments={comments} post={post} />
		
	{/if}

</Entry>

<script>

	import { getCategory, getTag, getAuthorName, getNiceDate } from '~/library/api'
	import { getBlock } from '~/library/blocks';

	import Entry from '~/components/layout/Entry'
	import EntryContent from '~/components/layout/EntryContent'
	import Comments from '~/components/objects/Comments'
	import Thumbnail from '~/components/objects/Thumbnail'
	
	export let post = {
		title: {
			rendered: 'Page'
		},
		content: {
			rendered: '<p>Content</p>'
		},
		acf: {
			disable_blocks: false
		},
		blocks: [],
		seo: {
			title: 'Page',
			description: 'Description',
			site: process.browser ? window.location.origin : ''
		},
		path: process.browser ? window.location.pathname : ''
	}
	
	export let comments = []
	
	$: category = getCategory(post)
	$: tag = getTag(post)
	$: isPage = post.type === 'page'
	$: showComments = post.comment_status === 'open'
	
</script>

<style lang="scss">
	
	.entry-header {
	    border-bottom: 3px solid var(--global--color-border);
	    padding-bottom: calc(2 * var(--global--spacing-vertical));
	    margin-bottom: calc(3 * var(--global--spacing-vertical));
	    max-width: var(--responsive--alignwide-width);
        margin-left: auto;
        margin-right: auto;
        
	}
	
	.entry-title {
	    font-size: var(--global--font-size-page-title);
	    margin-top: 0;
	    line-height: var(--heading--line-height-h1);
		font-weight: var(--heading--font-weight-page-title);
    }
    
    .entry-footer {
	    margin-top: calc(3.4 * var(--global--spacing-vertical));
	    margin-bottom: calc(3.4 * var(--global--spacing-vertical));
	    padding-bottom: 0;
	    padding-top: calc(0.8 * var(--global--spacing-vertical));
	    border-top: 3px solid var(--separator--border-color);
	    border-bottom: var(--separator--height) solid transparent;
	    display: grid;
	    grid-template-columns: repeat(2, 1fr);
	    column-gap: calc(2 * var(--global--spacing-horizontal));
	    font-size: var(--global--font-size-xs);
	        
	    .posted-on, .byline {
		    display: block;
	    }
	    
	    a {
		    color: currentColor;
		}
		
		.post-taxonomies {
			justify-content: flex-end;
			text-align: right;
			
			.cat-links {
				display: block;
			}
		}
	}

</style>