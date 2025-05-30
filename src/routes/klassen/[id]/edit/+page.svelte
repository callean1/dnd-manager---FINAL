<script>
	let { data } = $props();
	let { klasse } = data;

	let form = $state({
		name: klasse.name,
		bild_url: klasse.bild_url,
		beschreibung: klasse.beschreibung,
		merkmale: klasse.merkmale?.join(", ") ?? "",
		hauptfaehigkeiten: klasse.hauptfaehigkeiten?.join(", ") ?? "",
		magisch: klasse.magisch ?? false
	});
</script>

<main style="
	max-width: 600px;
	margin: 2rem auto;
	padding: 1rem;
	background: #f8f0e3;
	border-radius: 1rem;
	box-shadow: 0 4px 10px rgba(0,0,0,0.15);
	border: 2px solid #6b4a24;
	color: #5a3e2b;
">
	<h1 style="font-size: 2rem; margin-bottom: 1rem;">Klasse bearbeiten</h1>

	<form method="POST" action="?/update" style="display: flex; flex-direction: column; gap: 1rem;">
		<label>
			Name:
			<input name="name" bind:value={form.name} required
				style="width: 100%; padding: 0.5rem; border-radius: 0.3rem; border: 1px solid #ccc;" />
		</label>

		<label>
			Bild-URL:
			<input name="bild_url" bind:value={form.bild_url} required
				style="width: 100%; padding: 0.5rem; border-radius: 0.3rem; border: 1px solid #ccc;" />
		</label>

		<label>
			Beschreibung:
			<textarea name="beschreibung" bind:value={form.beschreibung} rows="4"
				style="width: 100%; padding: 0.5rem; border-radius: 0.3rem; border: 1px solid #ccc;"></textarea>
		</label>

		<label>
			Merkmale <small>(mit Kommas trennen)</small>:
			<textarea name="merkmale" bind:value={form.merkmale} rows="2"
				style="width: 100%; padding: 0.5rem; border-radius: 0.3rem; border: 1px solid #ccc;"></textarea>
		</label>

		<label>
			Hauptfähigkeiten <small>(mit Kommas trennen)</small>:
			<textarea name="hauptfaehigkeiten" bind:value={form.hauptfaehigkeiten} rows="2"
				style="width: 100%; padding: 0.5rem; border-radius: 0.3rem; border: 1px solid #ccc;"></textarea>
		</label>

		<label style="display: flex; align-items: center; gap: 0.5rem;">
			<input type="checkbox" name="magisch" bind:checked={form.magisch} />
			<span>Magisch?</span>
		</label>

		<button
			type="submit"
			class="submit-button"
		>
			Änderungen speichern
		</button>
	</form>

	<a href={`/klassen/${klasse._id}`} class="back-link">← Zurück zur Detailseite</a>
</main>

<style>
	.submit-button {
		padding: 0.75rem;
		background-color: #3f2a1d;
		color: #fceabb;
		border: none;
		border-radius: 0.5rem;
		cursor: pointer;
		font-weight: bold;
		transition: transform 0.2s ease, filter 0.2s ease;
	}

	.submit-button:hover {
		filter: brightness(1.1);
		transform: scale(1.03);
	}

	.back-link {
		display: inline-block;
		margin-top: 2rem;
		color: #3f2a1d;
		text-decoration: underline;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.back-link:hover {
		color: #1f130b;
		transform: scale(1.03);
	}
</style>


