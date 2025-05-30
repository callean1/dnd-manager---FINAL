import db from "$lib/server/db.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
  const search = url.searchParams.get("search") || "";
  const charaktere = await db.getAllCharaktere(search);
  return {
    charaktere,
    search
  };
}