import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const db = client.db("contactDB"); // Replace with your actual database name
      const collection = db.collection("contacts");

      const contact = {
        name: req.body.name,
        contactInfo: req.body.contactInfo,
        consultingType: req.body.consultingType,
        idealTimeframe: req.body.idealTimeframe,
        optionalMessage: req.body.optionalMessage,
      };

      await collection.insertOne(contact);
      res.status(201).json({ message: "Contact saved successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to save contact" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default handler;
