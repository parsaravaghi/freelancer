import Joi from "joi"
import { Project } from "../Models/Collections.js"

async function Project_get(req , res)
{   
    // getting all of projects records
    let projects = await Project.find().toArray()

    res.status(200).json(projects).end()

}

function Project_post(req , res)
{

    const schema = Joi.object().keys({
        title : Joi.string().required() ,
        description : Joi.string().required() ,
        maxTime : Joi.number().required() ,
        budget : Joi.number().min(10000).required() ,
        skills : Joi.array().required() ,
    })
    const {error} = schema.validate(req.body)

    if(!error)
    {
        Project.insertOne(req.body)

        res.status(200).json({message : "پروژه شما با موفقیت درخواست شد"})
    }
    else
    {
        res.status(400).json({message : error})
    }

}


export{Project_get , Project_post}