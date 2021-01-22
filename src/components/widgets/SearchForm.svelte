<form role="search" method="get" class="search-form" action="/" on:submit|preventDefault={onSubmit}>
	<label for="search-form-1">Search…</label>
	<input type="search" id="search-form-1" class="search-field" value={value} name="s">
	<input type="submit" class="search-submit" value="Search">
</form>

<script>

	import { goto } from '@sapper/app';
	
	export let value

	const onSubmit = (e) => {
		
		const s = e.currentTarget.elements.s.value
		
		goto(`/?s=${s}`)
		
	}
	
</script>

<style lang="scss">

	.search-form {
	    display: flex;
	    flex-wrap: wrap;
	    margin: auto;
	    max-width: var(--responsive--aligndefault-width);
	    
		> label {
		    width: 100%;
		    margin-bottom: 0;
		    font-weight: var(--form--label-weight);
		}
		
		.search-field {
		    flex-grow: 1;
		    max-width: inherit;
		    margin-top: calc(var(--global--spacing-vertical) / 3);
		    margin-right: calc(0.66 * var(--global--spacing-horizontal));
		}
		
		.search-submit {
		    margin-top: calc(var(--global--spacing-vertical) / 3);
		    margin-left: 10px;
		}
	}
	
</style>