import { MongoClient } from "mongodb";
import { connect } from "mongoose";

const URI = process.env.MONGODB_URI;
const option = {}

if(!URI) throw new Error("Please add your MongoDB URI to the .env file.");

let client = new MongoClient(URI, options);
let clientPromise

if(process.env.NODE_ENV !== "production") {
    if(!global._mongoClientPromise) {
        global._mongoClientPromise = client.connect()
    }

    clientPromise = global._mongoClientPromise
} else {
    clientPromise = client.connect();
}

export default clientPromise;