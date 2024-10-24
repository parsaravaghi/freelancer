import { compareSync } from "bcrypt"
import { User } from "../Models/Collections.js"

function AuthFunctions(req , res , next)
{
    res.login = async ( username, password , email )=>{

        if(email)
        {
            // Setting session
            req.session.user = {username : username , email : email }
            return true
        }

        // Getting user record by clients input information
        const user = await User.findOne({username : req.body.username})


        // Vallidating user information sent by client
        if(user)
        {
            // Verifying user password
            if(compareSync(password , user.password))
            {
                // setting session if password would be correct
                req.session.user = {username : username , email : user.email }
                res.status(202).json({message : "ورود با موفقیت انجام شد"}).end()
            }
            else
            {
                // Showing incorrect password error to client
                res.status(406).json({message : "رمز عبور شما صحیح نیست"}).end()
            }
        }
        else
        {
            // Setting username error
            res.status(406).json({message : "نام کاربری شما صحیح نیست"}).end()
        }
    }
    next()
}

function checkAuth(req , res , next)
{
    if(req.path == "/register" || req.path =="/login")
    {
        if(req.session.user)
        {
            res.status(406).json({message : "از قبل به حساب کاربری خود وارد شده اید"}).end()
        }
        else
        {
            next()
        }
    }
    else
    {
        next()
    }
}

export { checkAuth , AuthFunctions }