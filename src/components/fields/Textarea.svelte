<Label htmlFor={`input_${field.id}`}>{field.label}</Label>

<Textarea name={field.id} id={`input_${field.id}`} placeholder={field.placeholder} />

<script>

	import Label from '~/components/elements/Label'
	import Textarea from '~/components/elements/Textarea'

	export let field = {
		type: 'text'
	}
	
</script>