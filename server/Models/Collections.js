import { Db } from "../Db/Db.js";

// adding tables to database
const Project = Db.collection("projects")
const User = Db.collection("users")

// export collections
export { Project , User }