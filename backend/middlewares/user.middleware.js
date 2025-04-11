const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');

async function userAuth(request, response, next) {
    const token = request.headers["authorization"]
    if (!token){
        return response.status(401).json({message:"Please login"})
    }
    try {
       const payload = jwt.decode(token)
       const user = await UserModel.findById(payload.userId)
        if(!user){
            return response.status(401).json({message: "Please login"})
        }
       request.userId = payload.userId
    } catch (error) {
      return response.status(401).json({message: "Please login"})  
    }
    next()
}

module.exports = {
   userAuth 
}