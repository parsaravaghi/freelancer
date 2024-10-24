import Joi from "joi";
import { User } from "../Models/Collections.js";
import { compareSync, hashSync } from "bcrypt";

function Is_Authenticated(req , res)
{
    if(req.session.user)
    {
        const user = req.session.user 
        res.json({auth :true ,username : req.session.user.username , email :req.session.user.email}).end()
    }
    else
    {
        res.json({auth : false}).end()
    }
}

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
            return res.status(406).json({message : "حسابی با این نام وجود دارد"}).end()
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


function Logout(req , res)
{
    req.session.user = null
    res.status(202).json({message : "از حساب کاربری خود خارج شدید"}).end()
}

// Exporting functions
export {Register , Login , Is_Authenticated , Logout }