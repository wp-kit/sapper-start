<Entry>
	
	<header class="entry-header">
		<h2 class="entry-title default-max-width">
			<a href="/{post.slug}">{ post.title.rendered }</a>
		</h2>
	</header>

	<EntryContent spaced>
		{@html post.excerpt.rendered}	
	</EntryContent>
	
	<footer class="entry-footer default-max-width">
		<span class="posted-on">Published <time class="entry-date published updated" datetime="{post.date}">{getNiceDate(post.date)}</time></span>
		
		<div class="post-taxonomies">
		
			{#if category}
				<span class="cat-links">Categorized as <a href="/category/{category?.slug}/" rel="category tag">{category?.name}</a> </span>
			{/if}
			
			{#if tag}
				<span class="tags-links">Tagged <a href="/tag/{tag?.slug}/" rel="tag">{tag?.name}</a></span>
			{/if}
			
		</div>	
	
	</footer>
	
</Entry>

<script>

	import { getCategory, getTag, getNiceDate } from '~/library/api'
	
	import Entry from '~/components/layout/Entry'
	import EntryContent from '~/components/layout/EntryContent'
	import Paragraph from '~/components/blocks/Paragraph'
	
	export let post = {
		title: {
			rendered: 'Post'
		},
		excerpt: {
			rendered: '<p>Excerpt</p>'
		},
		date: '2020-01-01T00:00:00',
		slug: 'post'
	}
	
	$: category = getCategory(post)
	$: tag = getTag(post)
	
</script>

<style lang="scss">
	
	.entry-title {
	    color: var(--entry-header--color);
	    font-size: var(--entry-header--font-size);
	    letter-spacing: var(--heading--letter-spacing-h2);
	    line-height: var(--heading--line-height-h2);
	    overflow-wrap: break-word;
	    margin-bottom: 0;
	    
	    a {
		    color: var(--entry-header--color-link);
		    text-underline-offset: 0.15em;
		    
		    &:hover {
			    color: var(--entry-header--color-hover);
			}
		}
	}
	
	.entry-footer {
	    color: var(--global--color-primary);
	    clear: both;
	    float: none;
	    font-size: var(--global--font-size-xs);
	    
		margin-top: var(--global--spacing-vertical);
		padding-top: var(--global--spacing-unit);
		padding-bottom: calc(3 * var(--global--spacing-vertical));
		
		> span {
		    display: inline-block;
		}
		
		* {
		    max-width: var(--global--spacing-measure);
		}
		
		.cat-links {
			display: block;
		}
		
		a {
			color: currentColor;
		}
	}

</style>