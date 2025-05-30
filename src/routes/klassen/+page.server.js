import db from "$lib/server/db.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const search = url.searchParams.get("search") || "";
	const klassen = await db.getAllKlassen(search);
	return { klassen, search };
}