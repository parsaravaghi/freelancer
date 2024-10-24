import { Db } from "../Db/Db.js";

// adding tables to database
const Project = Db.collection("projects")
const User = Db.collection("users")
User.createIndex({username :11} , {unique : true})
// export collections
export { Project , User }