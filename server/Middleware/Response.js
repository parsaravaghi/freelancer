function FinalRes(req , res ,next)
{
    res.result = {}
    
    next()
}

export {FinalRes}