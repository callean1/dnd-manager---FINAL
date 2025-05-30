<script>
	let dummy = $state(1);
	import { page } from '$app/stores';
</script>

<nav class="navbar">
  <div class="nav-inner">
    <div class="nav-links">
      <a href="/" class:selected={$page.url.pathname === '/'}>Home</a>
      <a href="/rassen" class:selected={$page.url.pathname.startsWith('/rassen')}>Rassen</a>
      <a href="/klassen" class:selected={$page.url.pathname.startsWith('/klassen')}>Klassen</a>
      <a href="/charaktere" class:selected={$page.url.pathname.startsWith('/charaktere')}>Charaktere</a>
    </div>

    <div class="nav-icon">
      <img src="/images/dice-logo.png" alt="Würfel" />
    </div>
  </div>
</nav>

<style>
  .navbar {
    background-color: #5a3e2b;
    padding: 1rem 2rem;
    border-bottom: 2px solid #3c2718;
    font-family: 'Pirata One', cursive;
  }

  .nav-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .navbar a {
    color: #f4e6d1;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s ease;
  }

  .navbar a:hover {
    color: #e0c49e;
    text-decoration: underline;
  }

  .navbar a.selected {
    font-weight: bold;
    text-decoration: underline;
    color: #e0c49e;
  }

  .nav-icon img {
    height: 40px;
    width: auto;
    margin-left: 1rem;
  }
</style>