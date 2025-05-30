import db from "$lib/server/db.js";
import { redirect } from "@sveltejs/kit";

export async function load() {
  const rassen = await db.getRassen();
  const klassen = await db.getKlassen();
  return { rassen, klassen };
}

export const actions = {
  create: async ({ request }) => {
    const form = await request.formData();

    const charakter = {
      name: form.get("name"),
      alter: parseInt(form.get("alter")),
      rasse: form.get("rasse"),
      klasse: form.get("klasse"),
      wesen: form.get("wesen"),
      beschreibung: form.get("beschreibung"),
      bild_url: "/images/charaktere/Platzhalter.png"
    };

    await db.addCharakter(charakter);
    throw redirect(303, "/charaktere?success=true");
  }
};


