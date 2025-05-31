<script>
	let { data } = $props();
	const { charakter } = data;
</script>

<main class="charakter-detail">
	<h1>{charakter.name}</h1>

	<div class="charakter-content">
		
		<div class="charakter-image">
			<img src={charakter.bild_url} alt={charakter.name} />
			<img src="/images/Rahmen.png" alt="Rahmen" class="rahmen" />
		</div>

		
		<div class="charakter-info">
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
	</div>

	<div class="button-group">
		<a href={`/charaktere/${charakter._id}/edit`}>
			<button class="action-button">Bearbeiten</button>
		</a>

	
		<form 
			method="POST" 
			action="?/delete" 
			onsubmit={()=> confirm('Charakter wirklich löschen?') || event.preventDefault()}
			style="margin: 0;"
		>
			<button type="submit" class="delete-button">Löschen</button>
		</form>
	</div>

	<a href="/charaktere" class="back-link">
		← Zurück zur Übersicht
	</a>
</main>

<style>
	.charakter-detail {
		max-width: 900px;
		margin: 2rem auto;
		padding: 1rem;
		background-color: #f8f0e3;
		border-radius: 1rem;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
		border: 2px solid #6b4a24;
		color: #5a3e2b;
	}

	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	.charakter-content {
		display: flex;
		gap: 2rem;
		align-items: flex-start;
		margin-bottom: 1rem;
		flex-wrap: wrap;
	}

	.charakter-image {
		flex: 0 0 320px;
		position: relative;
		aspect-ratio: 1 / 1;
		border-radius: 1rem;
		overflow: hidden;
	}

	.charakter-image img:first-child {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 1rem;
		position: relative;
		z-index: 1;
	}

	.rahmen {
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

	.charakter-info {
		flex: 1 1 300px;
		min-width: 250px;
	}

	.charakter-info p {
		margin-bottom: 0.5rem;
	}

	.button-group {
		margin-top: 2rem;
		display: flex;
		gap: 1rem;
	}

	.action-button {
		background-color: #3f2a1d;
		color: #fceabb;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		border: 1px solid #d7b98e;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.action-button:hover {
		background-color: #2d1d14;
		transform: scale(1.03);
	}

	.delete-button {
		background-color: #d94f4f;
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		border: none;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.delete-button:hover {
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
	color: #2d1d14;
	transform: scale(1.03);
	text-decoration: underline;
}
</style>



