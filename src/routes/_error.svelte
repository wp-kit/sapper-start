<script>
   export let status;
   export let error;

   const dev = process.env.NODE_ENV === 'development';
   
   import SearchForm from '~/components/widgets/SearchForm'
   import PageHeader from '~/components/layout/PageHeader'
</script>

<style lang="scss">
	
	.not-found {
		margin-top: calc(3 * var(--global--spacing-vertical));
	}
	
	p {
	    font-size: var(--global--font-size-lg);
	    margin-bottom: calc(var(--global--spacing-vertical) * 1.6666666667);
	}
	
</style>

<svelte:head>
   <title>{status}</title>
</svelte:head>

<PageHeader title="Nothing here" />

<div class="error-404 not-found default-max-width">
	
	<div class="page-content">
	
		<p>It looks like nothing was found at this location. Maybe try a search?</p>
		
		<SearchForm />
		
	</div>

</div>

{#if dev && error.stack}
   <pre>{error.stack}</pre>
{/if}