import db from "$lib/server/db.js";
import { redirect, error } from "@sveltejs/kit";

// Lade Charakterdaten sowie verfügbare Rassen und Klassen
export async function load({ params }) {
	const charakter = await db.getCharakterById(params.id);
	if (!charakter) throw error(404, "Charakter nicht gefunden");

	const rassen = await db.getRassen();
	const klassen = await db.getKlassen();

	return { charakter, rassen, klassen };
}

// Verarbeite Formular-Update
export const actions = {
	update: async ({ request, params }) => {
		const form = await request.formData();

		const updated = {
			name: form.get("name"),
			alter: parseInt(form.get("alter")),
			rasse: form.get("rasse"),
			klasse: form.get("klasse"),
			wesen: form.get("wesen"),
			beschreibung: form.get("beschreibung"),
			bild_url: form.get("bild_url")
		};

		await db.updateCharakter(params.id, updated);
		throw redirect(303, "/charaktere?updated=true");
	}
};

