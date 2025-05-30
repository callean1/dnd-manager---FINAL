<script>
	let { data } = $props();
	const { rasse } = data;
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
	<h1 style="font-size: 2rem; margin-bottom: 1rem;">{rasse.name}</h1>

	<div
		style="
			display: flex;
			gap: 2rem;
			align-items: flex-start;
			margin-bottom: 1rem;
			flex-wrap: wrap;
		"
	>
		<!-- Bild -->
		<div style="flex: 0 0 320px; position: relative; aspect-ratio: 1 / 1; border-radius: 1rem; overflow: hidden;">
			<img
				src={rasse.bild_url}
				alt={rasse.name}
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

		<!-- Beschreibung und Merkmale -->
		<div style="flex: 1 1 300px; min-width: 250px;">
			<p style="margin-bottom: 1rem;">{rasse.beschreibung}</p>

			{#if rasse.merkmale?.length}
				<h3>Merkmale</h3>
				<ul style="padding-left: 1rem;">
					{#each rasse.merkmale as merkmal}
						<li>{merkmal}</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>

	<!-- Aktionen -->
	<div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
		<a href={`/rassen/${rasse._id}/edit`}>
			<button class="action-button dark">Bearbeiten</button>
		</a>

		<form method="POST" action="?/delete" on:submit|preventDefault={() => {
			if (confirm('Rasse wirklich löschen?')) {
				event.target.submit();
			}
		}}>
			<button type="submit" class="action-button delete">Löschen</button>
		</form>
	</div>

	<a href="/rassen" class="back-link">
		← Zurück zur Übersicht
	</a>
</main>

<style>
	.action-button {
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: all 0.2s ease;
		font-weight: bold;
	}

	.action-button.dark {
		background-color: #3f2a1d;
		color: #fceabb;
		border: 1px solid #d7b98e;
	}

	.action-button.dark:hover {
		background-color: #2d1d14;
		transform: scale(1.03);
	}

	.action-button.delete {
		background-color: #d94f4f;
		color: white;
		border: none;
	}

	.action-button.delete:hover {
		background-color: #b73c3c;
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



