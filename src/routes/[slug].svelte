<Single single={single} />
	
<script context="module">

	import { getData } from '~/library/api';

	export async function preload({ params, query }) {
		
		const pages = await getData('pages', {_embed: null, slug: params.slug}, this)
		let single = pages[0];
	    if(!single) {
			const posts = await getData('posts', {_embed: 1, slug: params.slug}, this)
			single = posts[0];
			if(!single) {
				this.error(404, 'Not found');
			}
	  	}
	  	
		return { single }
	}

</script>

<script>

	import Single from '~/components/templates/Single'
	
	export let single
	
</script>