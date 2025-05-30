<script>
	let { data } = $props();
	let { charakter, rassen, klassen } = data;

	let form = $state({
		name: charakter.name,
		bild_url: charakter.bild_url,
		beschreibung: charakter.beschreibung,
		alter: charakter.alter,
		wesen: charakter.wesen,
		rasse: charakter.rasse,
		klasse: charakter.klasse
	});
</script>

<main
	style="
		max-width: 600px;
		margin: 2rem auto;
		padding: 1rem;
		background: #f8f0e3;
		border-radius: 1rem;
		box-shadow: 0 4px 10px rgba(0,0,0,0.15);
		border: 2px solid #6b4a24;
		color: #5a3e2b;
	"
>
	<h1 style="font-size: 2rem; margin-bottom: 1rem;">Charakter bearbeiten</h1>

	<form method="POST" action="?/update" style="display: flex; flex-direction: column; gap: 1rem;">
		<label>
			Name:
			<input name="name" bind:value={form.name} required class="input" />
		</label>

		<label>
			Bild-URL:
			<input name="bild_url" bind:value={form.bild_url} required class="input" />
		</label>

		<label>
			Beschreibung:
			<textarea name="beschreibung" bind:value={form.beschreibung} rows="4" class="input"></textarea>
		</label>

		<label>
			Alter:
			<input name="alter" type="number" bind:value={form.alter} min="0" class="input" />
		</label>

		<label>
			Wesen:
			<input name="wesen" bind:value={form.wesen} class="input" />
		</label>

		<label>
			Rasse:
			<select name="rasse" bind:value={form.rasse} required class="input">
				<option value="" disabled>Bitte wählen</option>
				{#each rassen as r}
					<option value={r._id}>{r.name}</option>
				{/each}
			</select>
		</label>

		<label>
			Klasse:
			<select name="klasse" bind:value={form.klasse} required class="input">
				<option value="" disabled>Bitte wählen</option>
				{#each klassen as k}
					<option value={k._id}>{k.name}</option>
				{/each}
			</select>
		</label>

		<button type="submit" class="action-button">Speichern</button>
	</form>

	<a
		href={`/charaktere/${charakter._id}`}
		class="back-link"
	>
		← Zurück zur Detailseite
	</a>
</main>

<style>
	.input {
		width: 100%;
		padding: 0.5rem;
		border-radius: 0.3rem;
		border: 1px solid #ccc;
	}

	.action-button {
		background-color: #3f2a1d;
		color: #fceabb;
		padding: 0.75rem 1rem;
		border-radius: 0.5rem;
		border: 1px solid #d7b98e;
		cursor: pointer;
		font-weight: bold;
		transition: all 0.2s ease;
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
		transform: translateX(-2px);
	}
</style>



