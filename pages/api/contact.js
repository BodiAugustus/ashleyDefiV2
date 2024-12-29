import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so we don't create
  // multiple instances of MongoClient every time hot-reloading occurs
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const db = client.db("contactDB"); // Make sure this is correct
      const collection = db.collection("contacts");

      const contact = {
        name: req.body.name,
        contactInfo: req.body.contactInfo,
        consultingType: req.body.consultingType,
        idealTimeframe: req.body.idealTimeframe,
        optionalMessage: req.body.optionalMessage,
      };

      await collection.insertOne(contact);

      return res.status(201).json({ message: "Contact saved successfully" });
    } catch (error) {
      console.error("Error saving contact:", error);
      return res.status(500).json({ error: "Failed to save contact" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
