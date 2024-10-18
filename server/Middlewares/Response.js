function FinalRes(req , res ,next)
{
    // setting main result for every routes
    res.result = {}
    
    // Getting user information from session
    const user = req.session.user

    // Find out if the user is authenticated
    if(!req.session.user)
    {
        res.result.user = false
    }
    else
    {
        res.result.user = req.session.user
    } 

    next()
}


// exporting function
export { FinalRes }