<script>
  let { charakter } = $props();
</script>

<article class="card">
  <div class="card-content">
    <h2>{charakter.name}</h2>

    <div class="image-container">
      <img src={charakter.bild_url} alt={charakter.name} class="character-image" />
      <img src="/images/Rahmen.png" alt="Rahmen" class="frame-overlay" />
    </div>

    <p>{charakter.beschreibung}</p>

    {#if charakter.alter}
      <p><strong>Alter:</strong> {charakter.alter}</p>
    {/if}

    {#if charakter.wesen}
      <p><strong>Wesen:</strong> {charakter.wesen}</p>
    {/if}

    {#if charakter.rasse_name}
      <p><strong>Rasse:</strong> {charakter.rasse_name}</p>
    {/if}

    {#if charakter.klasse_name}
      <p><strong>Klasse:</strong> {charakter.klasse_name}</p>
    {/if}
  </div>

  <div class="card-button">
    <a href={`/charaktere/${charakter._id}`} class="view-button">Mehr anzeigen</a>
  </div>
</article>

<style>
  .card {
    max-width: 320px;
    width: auto;
    padding: 1rem 1.5rem;
    background-color: #f8f0e3;
    border-radius: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
    border: 2px solid #6b4a24;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
	color: #5a3e2b;
  }

  .card-content {
    flex-grow: 1;
  }

  .image-container {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    max-width: 320px;
    margin-bottom: 1rem;
  }

  .character-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    position: relative;
    z-index: 1;
  }

  .frame-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 108%;
    height: 108%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    pointer-events: none;
    z-index: 10;
  }

  .card-button {
    margin-top: 1rem;
    text-align: center;
  }

  .view-button {
    display: inline-block;
    background-color: #3f2a1d;
    color: #fceabb;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid #d7b98e;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .view-button:hover {
    filter: brightness(1.1);
    transform: scale(1.03);
  }
</style>



