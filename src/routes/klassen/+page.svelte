<script>
  import KlassenCard from "$lib/components/KlassenCard.svelte";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  let { data } = $props();
  let { klassen } = data;

  let searchQuery = data.search;

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
    const url = query ? `/klassen?search=${encodeURIComponent(query)}` : `/klassen`;
    window.location.href = url;
  }

  function createKlasse() {
    goto("/klassen/create");
  }
</script>

<!-- Button über dem Titel -->
<div class="top-button-wrapper">
  <button class="action-button" on:click={createKlasse}>Neue Klasse hinzufügen</button>
</div>

<h1 class="text-2xl font-bold mb-4">Klassen</h1>

<p>Die Klasse bestimmt, welche Rolle ein Charakter im Spiel übernimmt – etwa als mächtiger Zauberer, 
  geschickter Schurke oder standhafter Paladin. Jede Klasse hat einzigartige Fähigkeiten, Spielstile 
  und Spezialisierungen. Sie legt fest, welche Waffen, Rüstungen und Zauber ein Charakter nutzen kann, 
  und beeinflusst massgeblich seine Entwicklung im Abenteuerverlauf. Wähle hier deine Wunschklasse aus, 
oder erstelle dir eine neue Klasse, die exakt deiner Vorstellung entspricht und all deine Vorlieben vereint.</p>

<!-- Suchleiste -->
<div class="search-bar">
  <input
    type="text"
    placeholder="Suche Klasse"
    bind:value={searchQuery}
    class="input"
  />
  <button type="button" on:click={submitSearch} class="action-button">Suchen</button>
</div>

<!-- Feedback-Meldungen -->
{#if success}
  <p class="message success">Neue Klasse erfolgreich gespeichert!</p>
{/if}
{#if deleted}
  <p class="message delete">Klasse erfolgreich gelöscht!</p>
{/if}
{#if updated}
  <p class="message success">Klasse erfolgreich bearbeitet!</p>
{/if}

<!-- Kartenraster -->
<div class="grid">
  {#each klassen as klasse}
    <KlassenCard {klasse} />
  {/each}
</div>

<!-- Zurück-zum-Anfang-Button -->
<div class="scroll-top-wrapper">
  <button
    type="button"
    on:click={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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




