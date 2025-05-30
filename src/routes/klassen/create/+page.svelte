<script>
  let klasse = $state({
    name: "",
    beschreibung: "",
    hauptfaehigkeiten: "",
    magisch: false
  });
</script>

<main class="form-wrapper">
  <h1 class="form-title">Neue Klasse hinzufügen</h1>

  <form method="POST" action="?/create" class="form">
    <label>
      Name:
      <input name="name" bind:value={klasse.name} required class="input" />
    </label>

    <label>
      Beschreibung:
      <textarea name="beschreibung" bind:value={klasse.beschreibung} required rows="4" class="input"></textarea>
    </label>

    <label>
      Hauptfähigkeiten: <small>(mit Kommas trennen)</small>
      <input name="hauptfaehigkeiten" bind:value={klasse.hauptfaehigkeiten} class="input" />
    </label>

    <label class="checkbox-label">
      <input type="checkbox" name="magisch" bind:checked={klasse.magisch} />
      Magisch?
    </label>

    <button type="submit" class="submit-button">Klasse speichern</button>
  </form>

  <a href="/klassen" class="back-link">← Zurück zur Übersicht</a>
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
    color: #5a3e2b;
  }

  .form-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .form {
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

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .submit-button {
    padding: 0.75rem;
    background-color: #3f2a1d;
    color: #fceabb;
    border: 1px solid #d7b98e;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s ease;
  }

  .submit-button:hover {
    background-color: #2d1d14;
    transform: scale(1.03);
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
</style>


