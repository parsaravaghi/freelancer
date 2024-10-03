import Joi from "joi"
import { projects } from "../Models/Collections.js"

function AddProject(req , res)
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
        projects.insertOne(req.body)

        res.status(200).json({message : req.body})
    }
    else
    {
        res.status(400).json({message : error})
    }

}

export{AddProject}