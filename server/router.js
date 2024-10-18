import express from "express"
import { AddProject } from "./Controllers/apps/Project.js"
import { FinalRes } from "./Middlewares/Response.js"
import { ProjectPage } from "./Controllers/pages/projects.js"
import { Login, Register } from "./Controllers/apps/auth.js"
import session from "express-session"
import {config} from "dotenv"
import { AuthFunctions, checkAuth } from "./Middlewares/authorization.js"

// Configuring express library to our project
const app = express()
const port = 8000

// Application middleware

// Configuring session to our application
app.use(session({
    secret : "jaiuwjdawldiwajiojdawoij" ,
    resave : true ,
    unset : "keep" ,
    saveUninitialized:true 
}))

// For configuring json requests
app.use(express.json())

// For setting a single response for every routes
app.use(FinalRes)

// We use this Middleware to logout user if user isn't authenticated 
app.use(checkAuth)

// for setting authentication function in middleware
app.use(AuthFunctions)

// we you dotenv.config function to get values from .env flle
config()

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    // Pass to next layer of middleware
    next();
});

// apps
app.post("/projects" , AddProject)
app.post("/register" , Register )
app.post("/login" , Login )



// pages
app.get("/projects" , ProjectPage)


//listening app to the server
app.listen(port , ()=>{
    console.log(`the server is running on port ${port}`)
})