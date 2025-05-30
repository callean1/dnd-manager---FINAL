import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);
await client.connect();

const db = client.db("dnd");

const rassenCollection = db.collection("rassen");
const klassenCollection = db.collection("klassen");
const charaktereCollection = db.collection("charaktere");

//
// --- RASSEN ---
//

async function getRassen() {
	const rassen = await rassenCollection.find().toArray();
	rassen.forEach(r => r._id = r._id.toString());
	return rassen;
}

async function getAllRassen(search = "") {
	const query = search
		? { name: { $regex: search, $options: "i" } }
		: {};
	const rassen = await rassenCollection.find(query).toArray();
	rassen.forEach(r => r._id = r._id.toString());
	return rassen;
}

async function getRasseById(id) {
	const rasse = await rassenCollection.findOne({ _id: new ObjectId(id) });
	if (!rasse) return null;
	rasse._id = rasse._id.toString();
	return rasse;
}

async function addRasse(rasse) {
	await rassenCollection.insertOne(rasse);
}

async function updateRasse(id, data) {
	await rassenCollection.updateOne(
		{ _id: new ObjectId(id) },
		{ $set: data }
	);
}

async function deleteRasse(id) {
	await rassenCollection.deleteOne({ _id: new ObjectId(id) });
}

//
// --- KLASSEN ---
//

async function getKlassen() {
	const klassen = await klassenCollection.find().toArray();
	klassen.forEach(k => k._id = k._id.toString());
	return klassen;
}

async function getAllKlassen(search = "") {
	const query = search
		? { name: { $regex: search, $options: "i" } }
		: {};
	const klassen = await klassenCollection.find(query).toArray();
	klassen.forEach(k => k._id = k._id.toString());
	return klassen;
}

async function getKlasseById(id) {
	const klasse = await klassenCollection.findOne({ _id: new ObjectId(id) });
	if (!klasse) return null;
	klasse._id = klasse._id.toString();
	return klasse;
}

async function addKlasse(klasse) {
	await klassenCollection.insertOne(klasse);
}

async function updateKlasse(id, data) {
	await klassenCollection.updateOne(
		{ _id: new ObjectId(id) },
		{ $set: data }
	);
}

async function deleteKlasse(id) {
	await klassenCollection.deleteOne({ _id: new ObjectId(id) });
}

//
// --- CHARAKTERE ---
//

async function getCharaktere() {
	const charaktere = await charaktereCollection.find().toArray();

	for (const c of charaktere) {
		c._id = c._id.toString();

		let rasse = null;
		let klasse = null;

		if (ObjectId.isValid(c.rasse)) {
			rasse = await rassenCollection.findOne({ _id: new ObjectId(c.rasse) });
		}
		if (ObjectId.isValid(c.klasse)) {
			klasse = await klassenCollection.findOne({ _id: new ObjectId(c.klasse) });
		}

		c.rasse_name = rasse?.name ?? "Unbekannt";
		c.klasse_name = klasse?.name ?? "Unbekannt";
	}

	return charaktere;
}

async function getAllCharaktere(search = "") {
	const query = search
		? { name: { $regex: search, $options: "i" } }
		: {};
	const charaktere = await charaktereCollection.find(query).toArray();

	for (const c of charaktere) {
		c._id = c._id.toString();

		let rasse = null;
		let klasse = null;

		if (ObjectId.isValid(c.rasse)) {
			rasse = await rassenCollection.findOne({ _id: new ObjectId(c.rasse) });
		}
		if (ObjectId.isValid(c.klasse)) {
			klasse = await klassenCollection.findOne({ _id: new ObjectId(c.klasse) });
		}

		c.rasse_name = rasse?.name ?? "Unbekannt";
		c.klasse_name = klasse?.name ?? "Unbekannt";
	}

	return charaktere;
}

async function getCharakterById(id) {
	const charakter = await charaktereCollection.findOne({ _id: new ObjectId(id) });
	if (!charakter) return null;

	charakter._id = charakter._id.toString();

	let rasse = null;
	let klasse = null;

	if (ObjectId.isValid(charakter.rasse)) {
		rasse = await rassenCollection.findOne({ _id: new ObjectId(charakter.rasse) });
	}
	if (ObjectId.isValid(charakter.klasse)) {
		klasse = await klassenCollection.findOne({ _id: new ObjectId(charakter.klasse) });
	}

	charakter.rasse_name = rasse?.name ?? "Unbekannt";
	charakter.klasse_name = klasse?.name ?? "Unbekannt";

	return charakter;
}

async function addCharakter(charakter) {
	await charaktereCollection.insertOne(charakter);
}

async function updateCharakter(id, data) {
	await charaktereCollection.updateOne(
		{ _id: new ObjectId(id) },
		{ $set: data }
	);
}

async function deleteCharakter(id) {
	await charaktereCollection.deleteOne({ _id: new ObjectId(id) });
}

//
// --- Export aller Funktionen ---
//

export default {
	getRassen,
	getAllRassen,
	getRasseById,
	addRasse,
	updateRasse,
	deleteRasse,

	getKlassen,
	getAllKlassen,
	getKlasseById,
	addKlasse,
	updateKlasse,
	deleteKlasse,

	getCharaktere,
	getAllCharaktere,
	getCharakterById,
	addCharakter,
	updateCharakter,
	deleteCharakter
};

