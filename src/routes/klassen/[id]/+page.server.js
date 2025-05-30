import db from "$lib/server/db.js";
import { error, redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const klasse = await db.getKlasseById(params.id);
	if (!klasse) throw error(404, "Klasse nicht gefunden");
	return { klasse };
}

export const actions = {
	delete: async ({ params }) => {
		await db.deleteKlasse(params.id);
		throw redirect(303, "/klassen?deleted=true");
	}
};
