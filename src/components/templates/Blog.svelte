{#if title}
	
	<PageHeader title={title} />
	
	{#if search}
	
		<div class="search-result-count default-max-width">
		
			{#if totalItems > 0}
		
				We found {totalItems} result{totalItems > 1 ? 's' : ''} for your search.
				
			{:else}
				
				Sorry, but nothing matched your search terms. Please try again with some different keywords.
				
			{/if}
			
		</div>
		
		{#if totalItems < 1}
		
			<SearchForm value={search} />
			
		{/if}
		
	{/if}
	
{/if}

{#each posts as post}

	<Post post={post} />
	
{/each}

<Pagination totalPages={totalPages} currentPage={currentPage} root={root} />

<script>

	export let posts = []
	export let type
	export let value
	export let currentPage = 1
	export let totalPages = 1
	export let totalItems = 1
	export let root = '/'
	export let search
	
	import Pagination from '~/components/objects/Pagination'
	import Post from '~/components/objects/Post'
	import PageHeader from '~/components/layout/PageHeader'
	import SearchForm from '~/components/widgets/SearchForm'
	
	$: title = search ? `Results for "${search}"` : type ? `${type}: ${value}` : ''
	
</script>

<style lang="scss">
	
	.search-result-count {
		margin-top: calc(3 * var(--global--spacing-vertical));
		margin-bottom: calc(3 * var(--global--spacing-vertical));
	}
	
</style>