const jwt=require("jsonwebtoken");

const authVerify=(req,res,next)=>{
    const token=req.header("x-access-token");
    if(!token){
        return res.status(401).send({
            message:"Access Denied"
        })
    }
    try {
        const tokenVerify=jwt.verify(token,process.env.JWT_SECRET)
        req.user=tokenVerify
        next();
        
    } catch (error) {
        res.status(400).send({
            message:"Invalid Token"
        })
        
    }
}

module.exports={authVerify}