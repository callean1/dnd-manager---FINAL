<script>
	let { data } = $props();
	let { rasse } = data;

	let form = $state({
		name: rasse.name,
		bild_url: rasse.bild_url,
		beschreibung: rasse.beschreibung,
		merkmale: rasse.merkmale?.join(", ") ?? ""
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
	<h1 style="font-size: 2rem; margin-bottom: 1rem;">Rasse bearbeiten</h1>

	<form method="POST" action="?/update" style="display: flex; flex-direction: column; gap: 1rem;">
		<label>
			Name:
			<input
				name="name"
				bind:value={form.name}
				required
				style="width: 100%; padding: 0.5rem; border-radius: 0.3rem; border: 1px solid #ccc;"
			/>
		</label>

		<label>
			Bild-URL:
			<input
				name="bild_url"
				bind:value={form.bild_url}
				required
				style="width: 100%; padding: 0.5rem; border-radius: 0.3rem; border: 1px solid #ccc;"
			/>
		</label>

		<label>
			Beschreibung:
			<textarea
				name="beschreibung"
				bind:value={form.beschreibung}
				rows="4"
				style="width: 100%; padding: 0.5rem; border-radius: 0.3rem; border: 1px solid #ccc;"
			></textarea>
		</label>

		<label>
			Merkmale <small>(mit Kommas trennen)</small>:
			<textarea
				name="merkmale"
				bind:value={form.merkmale}
				rows="2"
				style="width: 100%; padding: 0.5rem; border-radius: 0.3rem; border: 1px solid #ccc;"
			></textarea>
		</label>

		<button
			type="submit"
			class="action-button"
		>
			Änderungen speichern
		</button>
	</form>

	<a href={`/rassen/${rasse._id}`} class="back-link">
		← Zurück zur Detailseite
	</a>
</main>

<style>
	.action-button {
		padding: 0.75rem;
		background-color: #3f2a1d;
		color: #fceabb;
		border: none;
		border-radius: 0.5rem;
		cursor: pointer;
		font-weight: bold;
		transition: background-color 0.2s ease, transform 0.2s ease;
	}
	.action-button:hover {
		background-color: #2d1d14;
		transform: scale(1.03);
	}

	.back-link {
		display: inline-block;
		margin-top: 1rem;
		color: #3f2a1d;
		text-decoration: underline;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.back-link:hover {
		color: #2d1d14;
		transform: scale(1.03);
	}
</style>



