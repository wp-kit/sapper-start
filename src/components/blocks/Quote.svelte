<Blockquote>{data.innerHTML.replace(/(<([^>]+)>)/gi, "")}</Blockquote>

<script>

	import Blockquote from '~/components/elements/Blockquote'

	export let data = {
		innerText: ''
	}
	
</script>