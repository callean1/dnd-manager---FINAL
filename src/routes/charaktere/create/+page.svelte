<script>
  import { onMount } from "svelte";

  let { data } = $props();
  let { rassen, klassen } = data;

  let charakter = $state({
    name: "",
    alter: "",
    rasse: rassen[0]?._id ?? "",
    klasse: klassen[0]?._id ?? "",
    wesen: "",
    beschreibung: ""
  });

  let success = $state(false);

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    success = params.get("success") === "true";

    if (success) {
      setTimeout(() => {
        success = false;
      }, 3000);
    }
  });
</script>

<main class="form-wrapper">
  <h1 class="form-title">Neuen Charakter erstellen</h1>

  {#if success}
    <p class="message success">Charakter erfolgreich gespeichert!</p>
  {/if}

  <form method="POST" action="?/create" class="form-content">
    <label>
      Name:
      <input name="name" bind:value={charakter.name} required class="input" />
    </label>

    <label>
      Alter:
      <input name="alter" type="number" bind:value={charakter.alter} required class="input" />
    </label>

    <label>
      Rasse:
      <select name="rasse" bind:value={charakter.rasse} class="input">
        {#each rassen as rasse}
          <option value={rasse._id}>{rasse.name}</option>
        {/each}
      </select>
    </label>

    <label>
      Klasse:
      <select name="klasse" bind:value={charakter.klasse} class="input">
        {#each klassen as klasse}
          <option value={klasse._id}>{klasse.name}</option>
        {/each}
      </select>
    </label>

    <label>
      Wesen:
      <input name="wesen" bind:value={charakter.wesen} class="input" />
    </label>

    <label>
      Beschreibung:
      <textarea name="beschreibung" bind:value={charakter.beschreibung} rows="4" class="input"></textarea>
    </label>

    <button type="submit" class="submit-button">Charakter speichern</button>
  </form>

  <a href="/charaktere" class="back-link">← Zurück zur Übersicht</a>
</main>

<style>
  .form-wrapper {
    max-width: 600px;
    margin: 2rem auto;
    padding: 1rem;
    background: #f8f0e3;
    border-radius: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    border: 2px solid #6b4a24;
  }

  .form-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .form-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: 1px solid #ccc;
  }

  .submit-button {
    padding: 0.75rem;
    background-color: #3f2a1d;
    color: #fceabb;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s ease;
  }

  .submit-button:hover {
    transform: scale(1.03);
    filter: brightness(1.05);
  }

  .back-link {
    display: inline-block;
    margin-top: 1rem;
    color: #3f2a1d;
    text-decoration: underline;
    transition: all 0.2s ease;
  }

  .back-link:hover {
    transform: scale(1.03);
    text-decoration: underline;
  }

  .message.success {
    color: green;
    margin-bottom: 0.5rem;
  }
</style>



