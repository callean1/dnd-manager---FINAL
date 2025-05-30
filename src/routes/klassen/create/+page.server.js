import db from "$lib/server/db.js";
import { redirect } from "@sveltejs/kit";

export const actions = {
  create: async ({ request }) => {
    const form = await request.formData();

    const name = form.get("name");
    const beschreibung = form.get("beschreibung");
    const hauptfaehigkeitenText = form.get("hauptfaehigkeiten");
    const magisch = form.get("magisch") === "on";

    const klasse = {
      name,
      beschreibung,
      hauptfaehigkeiten: hauptfaehigkeitenText
        .split(",")
        .map(m => m.trim())
        .filter(m => m.length > 0),
      magisch,
      bild_url: "/images/klassen/Platzhalter.png"
    };

    await db.addKlasse(klasse);
    throw redirect(303, "/klassen?success=true");
  }
};

