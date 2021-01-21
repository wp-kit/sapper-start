<svelte:head>
   <meta name="version" content="pkg.version">
</svelte:head>

<div id="page" class="site">

  <Header />
  
  <div id="content" class="site-content">
		
	<div id="primary" class="content-area">
	
		<main id="main" class="site-main" role="main">

			<slot {segment} />
			
		</main>
		
	</div>
	
  </div>

  <Footer />

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

<script>
   export let segment;
   
   import Header from '~/components/layout/Header'
   import Footer from '~/components/layout/Footer'
</script>

