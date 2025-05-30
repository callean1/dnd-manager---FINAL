import db from "$lib/server/db.js";
import { error, redirect } from "@sveltejs/kit";

export async function load({ params }) {
	const charakter = await db.getCharakterById(params.id);
	if (!charakter) {
		throw error(404, "Charakter nicht gefunden");
	}
	return { charakter };
}

export const actions = {
	delete: async ({ params }) => {
		await db.deleteCharakter(params.id);
		throw redirect(303, "/charaktere?deleted=true");
	}
};