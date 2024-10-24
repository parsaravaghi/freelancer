import cors from "cors"
import express from "express"
import {  Project_get, Project_post } from "./Controllers/Project.js"
import { Is_Authenticated, Login, Logout, Register } from "./Controllers/auth.js"
import session from "express-session"
import {config} from "dotenv"
import { AuthFunctions, checkAuth } from "./Middlewares/authorization.js"

// Configuring express library to our project
const app = express()
const port = 8080

// Application middleware

// Configuring session to our application
app.use(session({
    secret : "jaiuwjdawldiwajiojdawoij" ,
    resave : true ,
    unset : "keep" ,
    saveUninitialized:true 
}))

app.use(cors({
    credentials : true ,
    allowedHeaders : "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With" ,
    origin : "http://localhost:3000" ,
    methods : ["GET" , "POST" , "PUT" , "DELETE"]
}))
// For configuring json requests
app.use(express.json())


// We use this Middleware to logout user if user isn't authenticated 
app.use(checkAuth)

// for setting authentication function in middleware
app.use(AuthFunctions)

// we you dotenv.config function to get values from .env flle
config()

// projects
app.post("/projects" , Project_post)
app.get("/projects" , Project_get)

// auth
app.get("/auth" , Is_Authenticated)
app.post("/register" , Register )
app.post("/login" , Login )
app.post("/logout" , Logout)



//listening app to the server
app.listen(port , ()=>{
    console.log(`the server is running on port ${port}`)
})