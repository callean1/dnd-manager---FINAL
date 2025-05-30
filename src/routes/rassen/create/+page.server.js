import db from "$lib/server/db.js";
import { redirect } from "@sveltejs/kit";

export const actions = {
  create: async ({ request }) => {
    const form = await request.formData();

    const name = form.get("name");
    const beschreibung = form.get("beschreibung");
    const merkmaleText = form.get("merkmale");

    const rasse = {
      name,
      beschreibung,
      merkmale: merkmaleText
        .split(",")
        .map(m => m.trim())
        .filter(m => m.length > 0),
      bild_url: "/images/rassen/Platzhalter.png"
    };

    await db.addRasse(rasse);
    throw redirect(303, "/rassen?success=true");
  }
};
