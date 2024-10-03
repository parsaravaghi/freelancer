import { MongoClient } from "mongodb";

// adding db connection
export const Db = new MongoClient("127.0.0.1:27017").db()