const express = require('express')
const app = express()
const router = express.Router()
let UserModel = require('../models/UserModel')
const User = require('../models/UserModel')


router.route("/signup").post( async(req,res)=>{
    let reqData = req.body
    if(reqData == undefined){
        res.status(400).send({
            "status":false,
        "message":"Invalid data"})
        console.log(reqData)

    }
    let user = {
        "user_name": reqData.unm,
        "email": reqData.email,
        "password": reqData.upwd
    }
    //create user model object

    let new_user = new UserModel(user)

    try{
        await new_user.save(user)
        console.log("User Record Saved")
        res.status(200).send("User Record Saved")
    }catch(err){
        console.error(`Error in saving record ${err}`)
        res.status(500).send(err)
    }

})

router.route("/login").post(async (req,res)=>{
    const {username, password} = req.body;
    
    
    const user = await User.findOne({username})
    if(!user){
        res.status(400).json({error: "User does not exist"})
    }

    if(user.password !== password){
        return res.status(401).json({ error: 'Password is incorrect' })
    }

    res.status(200).json({message:"login Successful"})
})



module.exports = router