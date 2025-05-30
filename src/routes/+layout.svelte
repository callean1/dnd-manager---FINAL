<script>
  let dummy = $state(1);
  import NavBar from '$lib/components/NavBar.svelte';
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Pirata+One&display=swap" rel="stylesheet" />
</svelte:head>

<NavBar />

<div class="app-wrapper">
  <slot />
</div>

<style>
 
  .app-wrapper {
    background-color: #f4eee0;
    min-height: 100vh;
    padding: 2rem;
    font-family: 'Pirata One', cursive;
    color: #5a3e2b;
  }

</style>



