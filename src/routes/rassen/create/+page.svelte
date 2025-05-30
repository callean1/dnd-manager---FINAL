<script>
	let name = $state("");
	let bild_url = $state("");
	let beschreibung = $state("");
	let merkmale = $state([]);
	let newMerkmal = $state("");
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
	<h1 style="font-size: 2rem; margin-bottom: 1rem;">Neue Rasse hinzufügen</h1>

	<form method="POST" action="?/create" style="display: flex; flex-direction: column; gap: 1rem;">
		<label>
			Name:
			<input
				name="name"
				bind:value={name}
				required
				style="width: 100%; padding: 0.5rem; border-radius: 0.3rem; border: 1px solid #ccc;"
			/>
		</label>

		<label>
			Bild-URL:
			<input
				name="bild_url"
				bind:value={bild_url}
				style="width: 100%; padding: 0.5rem; border-radius: 0.3rem; border: 1px solid #ccc;"
			/>
		</label>

		<label>
			Beschreibung:
			<textarea
				name="beschreibung"
				bind:value={beschreibung}
				rows="4"
				style="width: 100%; padding: 0.5rem; border-radius: 0.3rem; border: 1px solid #ccc;"
			></textarea>
		</label>

		<label>
			Merkmale:
			<ul style="list-style: disc inside; padding-left: 1rem;">
				{#each merkmale as merkmal, i}
					<li>
						{merkmal}
						<button
							type="button"
							on:click={() => merkmale = merkmale.filter((_, j) => j !== i)}
							style="margin-left: 0.5rem; color: red; background: none; border: none; cursor: pointer;"
						>✕</button>
					</li>
				{/each}
			</ul>

			<input
				type="text"
				bind:value={newMerkmal}
				placeholder="Neues Merkmal hinzufügen"
				style="width: 100%; padding: 0.5rem; border-radius: 0.3rem; border: 1px solid #ccc;"
			/>

			<button
				type="button"
				on:click={() => {
					if (newMerkmal.trim()) {
						merkmale = [...merkmale, newMerkmal.trim()];
						newMerkmal = "";
					}
				}}
				class="action-button"
				style="margin-top: 0.5rem;"
			>
				Merkmal hinzufügen
			</button>
		</label>

		<input type="hidden" name="merkmale" value={merkmale.join(",")} />

		<button type="submit" class="action-button">
			Hinzufügen
		</button>
	</form>

	<a href="/rassen" class="back-link">← Zurück zur Übersicht</a>
</main>

<style>
	.action-button {
		background-color: #3f2a1d;
		color: #fceabb;
		padding: 0.75rem;
		border: none;
		border-radius: 0.5rem;
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
		transform: scale(1.03);
	}
</style>





