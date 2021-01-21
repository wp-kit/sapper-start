<svelte:head>
   <meta name="version" content="pkg.version">
</svelte:head>

<div id="page" class="site">

  <Header info={info} nav={topNav} />
  
  <div id="content" class="site-content">
		
	<div id="primary" class="content-area">
	
		<main id="main" class="site-main" role="main">

			<slot {segment} />
			
		</main>
		
	</div>
	
  </div>

  <Footer nav={bottomNav} />

</div>

<style lang="scss">

	.site-main {
	    padding-top: var(--global--spacing-vertical);
	    padding-bottom: var(--global--spacing-vertical);
	    margin-left: auto;
	    margin-right: auto;
	}
	
	.site-content:after, .site-content:before {
	    content: "";
	    display: table;
	    table-layout: fixed;
	}
	
</style>

<script context="module">

	import { getData } from '~/library/api';

	export async function preload({ params, query }) {
		
		const info = await getData('', {}, this)
		const topNav = await getData('menus/v1/locations/primary', {}, this)
		const bottomNav = await getData('menus/v1/locations/footer', {}, this)
		
		return { info, topNav, bottomNav }
	}
	
</script>

<script>
   export let segment;
   export let info = {}
   export let topNav = {}
   export let bottomNav = {}
   
   import Header from '~/components/layout/Header'
   import Footer from '~/components/layout/Footer'
   import { setContext } from 'svelte';
   
   $: setContext('info', info)
</script>

