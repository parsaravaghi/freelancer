import Joi from "joi";
import { User } from "../../Models/Collections.js";
import { compareSync, hashSync } from "bcrypt";

function Register(req , res)
{
    // Validating the data sent by client
    const schema = Joi.object().keys({
    username : Joi.string().max(15).required() ,
    password : Joi.string().min(8).required() ,
    email : Joi.string().email().required()
    })

    // Getting the exact error of user data information
    const {error} = schema.validate(req.body)

    if(!error)
    {
        // Hashing password
        req.body.password = hashSync(req.body.password, 10)

        // Registering user
        User.insertOne(req.body)
        .then(()=>{
            // Authenticating user  
            res.login(req.body.username , req.body.password , req.body.email)
            res.status(201).json({message : "حساب کاربری شما با موفقیت ساخته شد"}).end()
        })
        .catch(()=>{
            // Showing repeated username error to the client
            return res.status(409).json({message : "حسابی با این نام وجود دارد"}).end()
        })
    }
    else
    {
        // Showing validation error to the client
        res.status(406).json({error : error.details}).end()
    }
}
async function Login(req , res)
{
    // Validating the data sent by client
    const schema = Joi.object().keys({
        username : Joi.string().max(15).required() ,
        password : Joi.string().required() 
    })

    // Getting the exact error of user data information
    const {error} = schema.validate(req.body)

    if(!error)
    {
        res.login(req.body.username , req.body.password)
    }
    else
    {
        res.status(406).json({error : error}).end()
    }

}

// Exporting functions
export {Register , Login}