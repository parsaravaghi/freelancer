import { Project } from "../../Models/Collections.js";

async function ProjectPage(req , res)
{   
    // getting all of projects records
    let projects = await Project.find().toArray()


    res.result.projects = projects

    res.status(200).json(res.result).end()

}
// exporting function
export{ProjectPage}