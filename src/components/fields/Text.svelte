<Label htmlFor={`input_${field.id}`}>{field.label}</Label>

<Input type={field.type} name={field.id} id={`input_${field.id}`} placeholder={field.placeholder} />

<script>

	import Label from '~/components/elements/Label'
	import Input from '~/components/elements/Input'

	export let field = {
		type: 'text'
	}
	
</script>