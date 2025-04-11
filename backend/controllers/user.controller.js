const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
const UserModel = require("../models/user.model")

const register = async (request,response)=>{
    console.log("we are here")
    const{email, username, password} = request.body
    const existingUser = await UserModel.findOne({
        email
        })
    if (existingUser){
        return response.status(409).json({message:"user already exist"})
    }
    
    const hashedPassword = await bcrypt.hash(password, 10)
    
    const user = await UserModel.create({email, username, password: hashedPassword})
    response.json(user)
}

const login = async(request, response)=>{
    const{email, password} = request.body
    const user = await UserModel.findOne({
        email
    })
    if (!user){
        return response.status(404).json({message: "wrong credential"})
    }

    const passwordMatches = bcrypt.compareSync(password, user.password)
    if (!passwordMatches){
        return response.status(404).json({message:"wrong credential"})
    }
    const token = jwt.sign({userId: user._id},"mySecret")
    response.json({user, token})
}

module.exports = {
    register, login
}