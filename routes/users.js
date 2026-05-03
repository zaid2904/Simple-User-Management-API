import express from "express";
import User from "../models/userModel.js";

const users = express.Router();


// get wala Route
users.get('/users', async (req,res)=>{
  try{
    const users = await User.find();
    res.status(200).json(users)
  }
  catch(err){
    res.status(500).json({
      success : false,
      message: err.message
    })
  }
})

// Create wala route
users.post('/users', async(req,res)=>{
  try{
    const {name , email , password} =  req.body;
    const newUser = new User({name, email, password});
    await newUser.save()
    res.status(200).json({
      success:true,
      user : newUser
      // message: "data is uploaded in MongoDB"
    })
  }
  catch(err){
    res.status(500).json({
      success:false,
      message: err.message
    })
  }
})

export default users;