// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;
// let client;
// let clientPromise;

// if (!uri) {
//   throw new Error("Please add your Mongo URI to .env.local");
// }

// if (process.env.NODE_ENV === "development") {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(uri);
//   clientPromise = client.connect();
// }

// const handler = async (req, res) => {
//   if (req.method === "POST") {
//     try {
//       const client = await clientPromise;
//       const db = client.db("contactDB"); // Replace with your actual database name
//       const collection = db.collection("contacts");

//       const contact = {
//         name: req.body.name,
//         contactInfo: req.body.contactInfo,
//         consultingType: req.body.consultingType,
//         idealTimeframe: req.body.idealTimeframe,
//         optionalMessage: req.body.optionalMessage,
//       };

//       await collection.insertOne(contact);
//       res.status(201).json({ message: "Contact saved successfully" });
//     } catch (error) {
//       res.status(500).json({ error: "Failed to save contact" });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// };

// export default handler;

import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

// 1. Grab the MongoDB connection string from environment variables
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Please add your Mongo URI to .env or Vercel Env Variables");
}

// 2. Create a global connection promise so we don't reconnect each time
let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

// 3. Implement the POST handler
export async function POST(request) {
  try {
    // Parse the JSON coming from the client
    const body = await request.json();

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("contactDB"); // Or your actual DB name
    const collection = db.collection("contacts");

    // Create the contact document
    const contact = {
      name: body.name,
      contactInfo: body.contactInfo,
      consultingType: body.consultingType,
      idealTimeframe: body.idealTimeframe,
      optionalMessage: body.optionalMessage,
    };

    // Insert it into the "contacts" collection
    await collection.insertOne(contact);

    // Return a success response
    return NextResponse.json(
      { message: "Contact saved successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting contact:", error);
    return NextResponse.json(
      { error: "Failed to save contact" },
      { status: 500 }
    );
  }
}

// 4. Optionally, handle other methods (GET, PUT, etc.) as “Method Not Allowed”
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
