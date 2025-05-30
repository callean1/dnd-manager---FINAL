import db from "$lib/server/db.js";
import { redirect, error } from "@sveltejs/kit";

export async function load({ params }) {
	const rasse = await db.getRasseById(params.id);
	if (!rasse) throw error(404, "Rasse nicht gefunden");
	return { rasse };
}

export const actions = {
	update: async ({ request, params }) => {
		const form = await request.formData();

		const name = form.get("name");
		const beschreibung = form.get("beschreibung");
		const bild_url = form.get("bild_url");
		const merkmaleText = form.get("merkmale");

		const updated = {
			name,
			beschreibung,
			bild_url,
			merkmale: merkmaleText
				.split(",")
				.map(m => m.trim())
				.filter(m => m.length > 0)
		};

		await db.updateRasse(params.id, updated);
		throw redirect(303, "/rassen?updated=true");
	}
};

