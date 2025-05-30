import db from "$lib/server/db.js";
import { redirect, error } from "@sveltejs/kit";

export async function load({ params }) {
	const klasse = await db.getKlasseById(params.id);
	if (!klasse) throw error(404, "Klasse nicht gefunden");
	return { klasse };
}

export const actions = {
	update: async ({ request, params }) => {
		const form = await request.formData();

		const updated = {
			name: form.get("name"),
			bild_url: form.get("bild_url"),
			beschreibung: form.get("beschreibung"),
			magisch: form.get("magisch") === "on",
			hauptfaehigkeiten: form.get("hauptfaehigkeiten")
				.split(",")
				.map((f) => f.trim())
				.filter((f) => f.length > 0),
			merkmale: form.get("merkmale")
				?.split(",")
				.map((m) => m.trim())
				.filter((m) => m.length > 0) ?? []
		};

		await db.updateKlasse(params.id, updated);
		throw redirect(303, "/klassen?updated=true");
	}
};
