<script>
	let { data } = $props();
	const { klasse } = data;
</script>

<main
	style="
		max-width: 900px;
		margin: 2rem auto;
		padding: 1rem;
		background-color: #f8f0e3;
		border-radius: 1rem;
		box-shadow: 0 4px 10px rgba(0,0,0,0.15);
		border: 2px solid #6b4a24;
		color: #5a3e2b;
	"
>
	<h1 style="font-size: 2rem; margin-bottom: 1rem;">{klasse.name}</h1>

	<div
		style="
			display: flex;
			gap: 2rem;
			align-items: flex-start;
			margin-bottom: 1rem;
			flex-wrap: wrap;
		"
	>

		<div style="flex: 0 0 320px; position: relative; aspect-ratio: 1 / 1; border-radius: 1rem; overflow: hidden;">
			<img
				src={klasse.bild_url}
				alt={klasse.name}
				style="width: 100%; height: 100%; object-fit: cover; border-radius: 1rem; position: relative; z-index: 1;"
			/>
			<img
				src="/images/Rahmen.png"
				alt="Rahmen"
				style="
					position: absolute;
					top: 50%;
					left: 50%;
					width: 108%;
					height: 108%;
					transform: translate(-50%, -50%);
					object-fit: cover;
					pointer-events: none;
					z-index: 10;
				"
			/>
		</div>


		<div style="flex: 1 1 300px; min-width: 250px;">
			<p style="margin-bottom: 1rem;">{klasse.beschreibung}</p>

			{#if klasse.hauptfaehigkeiten?.length}
				<h3>Hauptfähigkeiten</h3>
				<ul style="padding-left: 1rem;">
					{#each klasse.hauptfaehigkeiten as faehigkeit}
						<li>{faehigkeit}</li>
					{/each}
				</ul>
			{/if}

			<p><strong>Magisch?</strong> {klasse.magisch ? "Ja" : "Nein"}</p>

			{#if klasse.merkmale?.length}
				<h3>Merkmale</h3>
				<ul style="padding-left: 1rem;">
					{#each klasse.merkmale as merkmal}
						<li>{merkmal}</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>

	<div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
		<a href={`/klassen/${klasse._id}/edit`}>
			<button class="fancy-button dark">Bearbeiten</button>
		</a>

		<form
			method="POST"
			action="?/delete"
			on:submit={() => confirm('Klasse wirklich löschen?') || event.preventDefault()}
			style="margin: 0;"
		>
			<button type="submit" class="fancy-button delete">Löschen</button>
		</form>
	</div>

	<a href="/klassen" class="back-link">
		← Zurück zur Übersicht
	</a>
</main>

<style>
	.fancy-button {
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		cursor: pointer;
		font-weight: bold;
		transition: all 0.2s ease;
	}

	.fancy-button.dark {
		background-color: #3f2a1d;
		color: #fceabb;
		border: 1px solid #d7b98e;
	}

	.fancy-button.dark:hover {
		background-color: #2d1d14;
		transform: scale(1.03);
	}

	.fancy-button.delete {
		background-color: #d94f4f;
		color: white;
		border: none;
	}

	.fancy-button.delete:hover {
		filter: brightness(0.9);
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



