import { MongoClient } from "mongodb";

// adding db connection
export const Db = new MongoClient("mongodb://localhost:27017").db("freelancer")