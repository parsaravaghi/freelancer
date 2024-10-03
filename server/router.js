import express from "express"
import { AddProject } from "./Controllers/Project.js"

const app = express()
const port = 8000

app.use(express.json())

app.get("/" , (req , res) =>{
    res.send("hello")
})
app.post("/project" , AddProject)

app.listen(port , ()=>{
    console.log(`the server is running on port ${port}`)
})