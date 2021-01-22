{#if totalPages > 1}

	<nav class="navigation pagination" role="navigation" aria-label="Posts">
		
		<h2 class="screen-reader-text">Posts navigation</h2>
		
		<div class="nav-links">
		
			{#if currentPage >= totalPages}
				<a class="prev page-numbers" href="{root}{currentPage-1 > 1 ? `page/${currentPage-1}` : ''}">
					<svg class="svg-icon" width="24" height="24" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 13v-2H8l4-4-1-2-7 7 7 7 1-2-4-4z" fill="currentColor"></path></svg> 
					<span class="nav-prev-text">Newer 
						<span class="nav-short">Posts</span>
					</span>
				</a>
			{/if}
		
			{#each Array.from({length: totalPages}, (_, i) => i + 1) as i}
				{#if i === currentPage}
					<span aria-current="page" class="page-numbers current">Page {i}</span>
				{:else}
					<a class="page-numbers" href="{root}{i > 1 ? `page/${i}` : ''}">Page {i}</a>
				{/if}
			{/each}
			
			{#if totalPages > currentPage}
				<a class="next page-numbers" href="{root}page/{currentPage+1}/">
					<span class="nav-next-text">Older 
						<span class="nav-short">Posts</span>
					</span> 
					<svg class="svg-icon" width="24" height="24" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m4 13v-2h12l-4-4 1-2 7 7-7 7-1-2 4-4z" fill="currentColor"></path></svg>
				</a>
			{/if}
			
		</div>
	</nav>

{/if}

<script>

	export let currentPage = 1
	export let totalPages = 1
	export let root = '/'
	
</script>