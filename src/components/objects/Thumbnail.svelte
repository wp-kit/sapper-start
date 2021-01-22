{#if thumb}
	<figure class="post-thumbnail">
	
		{#if url}
		
			<a class="post-thumbnail-inner alignwide" href="{url}" aria-hidden="true" tabindex="-1">
		
				<img width={thumb.width} height={thumb.height} src={thumb.source_url} class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt={featuredImage.alt_text} srcset="{srcset}" sizes="(max-width: {thumb.width}px) 100vw, {thumb.width}px">	
				
			</a>
			
		{:else}
		
			<img width={thumb.width} height={thumb.height} src={thumb.source_url} class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt={featuredImage.alt_text} srcset="{srcset}" sizes="(max-width: {thumb.width}px) 100vw, {thumb.width}px">	
			
		{/if}
									
	</figure>				
{/if}

<script>

	export let featured
	export let url

	$: featuredImage = featured ? featured[0] : null
	$: sizes = featuredImage?.media_details?.sizes || {}
	$: thumb = Object.keys(sizes).length ? sizes['post-thumbnail'] : null
	$: srcset = Object.keys(sizes).map(i => [sizes[i].source_url, `${sizes[i].width}vw`].join(' ')).join(', ')
	
</script>

<style lang="scss">

	.post-thumbnail {
		text-align: center;
		margin-left: auto;
	    margin-right: auto;
	    width: var(--responsive--alignwide-width);
	    max-width: var(--responsive--alignfull-width);
	    
	    .wp-post-image {
		    display: block;
		    width: 100%;
		    height: 66.67%;
		    max-width: 1920px;
		    margin-left: auto;
		    margin-right: auto;
		    margin-top: calc(2 * var(--global--spacing-vertical));
		}
	}
	
</style>