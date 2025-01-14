import jwt from 'jsonwebtoken'
 
// This middleware will take the token and convert it in user ID.
const authMiddleware = async(req,res,next)=>{
    const {token} = req.headers
    if(!token){
        return res.json({success:false, message:"Not Authorized Login again"})
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = token_decode.id // token ko decode kr k usmei se userId le li.
        next()
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

export default authMiddleware