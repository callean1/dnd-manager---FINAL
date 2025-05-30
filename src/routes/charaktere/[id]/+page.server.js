import db from "$lib/server/db.js";
import { error, redirect } from "@sveltejs/kit";

// Lädt den spezifischen Charakter anhand der ID aus der URL
export async function load({ params }) {
	const charakter = await db.getCharakterById(params.id);
	if (!charakter) {
		throw error(404, "Charakter nicht gefunden");
	}
	return { charakter };
}

// Action zum Löschen des Charakters
export const actions = {
	delete: async ({ params }) => {
		await db.deleteCharakter(params.id);
		throw redirect(303, "/charaktere?deleted=true");
	}
};