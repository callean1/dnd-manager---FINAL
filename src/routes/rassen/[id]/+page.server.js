import db from "$lib/server/db.js";
import { error, redirect } from "@sveltejs/kit";

export async function load({ params }) {
	const rasse = await db.getRasseById(params.id);
	if (!rasse) throw error(404, "Rasse nicht gefunden");
	return { rasse };
}

export const actions = {
	delete: async ({ params }) => {
		await db.deleteRasse(params.id);
		throw redirect(303, "/rassen?deleted=true");
	}
};