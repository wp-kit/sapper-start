<form method="post" on:submit|preventDefault={onSubmit}>

	{#if data.form}

		{#each data.form.fields as field}
		
			<svelte:component this="{getField(field.type)}" field={field} />
		
		{/each}
		
		<Button>{data.form.button.text}</Button>
		
	{/if}

</form>

<script>

	import { getField } from '~/library/fields'
	import { createEntry } from '~/library/api'
	
	import Button from '~/components/elements/Button'
	
	export let data = {
		form: {
			fields: []
		}
	}

	const onSubmit = async (e) => {
		
		let fields = {}
		
		Array.from(e.currentTarget.elements).forEach(el => {
			if(el.name) {
				fields[el.name] = el.value
			}
		})
		
		try {
		
			const json = await createEntry(data.form.id, fields)
			
			const confirmation = data.form.confirmations[Object.keys(data.form.confirmations)[0]]
			
			alert(confirmation.message)
			
		} catch(err) {
			
			alert(err)
			
		}
		
	}
	
</script>