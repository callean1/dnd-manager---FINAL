<script>
  import CharaktereCard from "$lib/components/CharaktereCard.svelte";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  let { data } = $props();
  let { charaktere } = data;

  let searchQuery = $state(data.search);

  let success = $state(false);
  let deleted = $state(false);
  let updated = $state(false);

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    success = params.get("success") === "true";
    deleted = params.get("deleted") === "true";
    updated = params.get("updated") === "true";

    if (success || deleted || updated) {
      setTimeout(() => {
        success = false;
        deleted = false;
        updated = false;
      }, 3000);
    }
  });

  function submitSearch() {
    const query = searchQuery.trim();
    const url = query ? `/charaktere?search=${encodeURIComponent(query)}` : `/charaktere`;
    window.location.href = url;
  }

  function createCharakter() {
    goto("/charaktere/create");
  }
</script>

<div class="top-button-wrapper">
  <button class="action-button" onclick={createCharakter}>Neuen Charakter erstellen</button>
</div>

<h1 class="text-2xl font-bold mb-4">Charaktere</h1>

<p>Charaktere sind die Helden, die die Spieler in Dungeons & Dragons verkörpern. Sie bestehen aus einer 
  Kombination aus Rasse, Klasse, persönlichen Eigenschaften und einer individuellen Geschichte. Jeder 
  Charakter hat Stärken, Schwächen und Ziele – und wird im Laufe der Kampagne weiterentwickelt, erlebt 
  Abenteuer, trifft Entscheidungen und wächst daran. Wähle einen der vorgefertigten Charaktere oder erstelle 
  dir einen komplett neuen Charakter, denke dir deine eigene Hintergrundgeschichte aus und stürze dich mit 
  deinem personalisierten Helden in das Abenteuer!</p>

<div class="search-bar">
  <input
    type="text"
    placeholder="Suche Charakter"
    bind:value={searchQuery}
    class="input"
  />
  <button type="button" onclick={submitSearch} class="action-button">Suchen</button>
</div>

{#if success}
  <p class="message success">Charakter erfolgreich erstellt!</p>
{/if}
{#if deleted}
  <p class="message delete">Charakter gelöscht!</p>
{/if}
{#if updated}
  <p class="message success">Charakter aktualisiert!</p>
{/if}

<div class="grid">
  {#each charaktere as charakter}
    <CharaktereCard {charakter} />
  {/each}
</div>

<div class="scroll-top-wrapper">
  <button
    type="button"
    onclick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    class="action-button"
  >
    ↑ Zum Seitenanfang zurück
  </button>
</div>

<style>
  .top-button-wrapper {
    margin-bottom: 1rem;
  }


  .search-bar {
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }

  .input {
    border: 1px solid #ccc;
    border-radius: 0.375rem;
    padding: 0.5rem;
  }

  .action-button {
  background-color: #eaeaea;
  color: #1a1a1a;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #b5b5b5;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
}

  .action-button:hover {
  background-color: #d8d8d8;
  transform: scale(1.03);
}

  .message {
    margin-top: 0.5rem;
  }

  .message.success {
    color: green;
  }

  .message.delete {
    color: red;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
    justify-items: center;
  }

  .scroll-top-wrapper {
    text-align: center;
    margin-top: 2rem;
  }
</style>



