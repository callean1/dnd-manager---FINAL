import db from "$lib/server/db.js";
import { redirect } from "@sveltejs/kit";

/** Lädt Rassen und Klassen für Dropdowns im Formular */
export async function load() {
  const rassen = await db.getRassen();
  const klassen = await db.getKlassen();
  return { rassen, klassen };
}

/** Speichert einen neuen Charakter nach Formabsendung */
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


