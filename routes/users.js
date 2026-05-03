import express from "express";
import User from "../models/userModel.js";

const users = express.Router();


// get Route
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

// Create route
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

// update route 
users.put('/users/:id', async(req,res)=>{
  const {id} = req.params;
  const {name , email, password } = req.body;

  try{
    const updatedUser = await User.findByIdAndUpdate(id, {name,password,email})
    if(!updatedUser){
      res.json({
        message: "User not found"
      })
    }
  // if you have updated user successfully then 
  res.status(200).json({
    success:true,
    user:updatedUser
  })
}
  catch(err){
    res.status(500).json({
      success:false,
      message: err.message
    })
  }
})


// Delete Operation route
users.delete('/users/:id', async(req,res)=>{
  const {id} = req.params;
  try{
    const deletedUser = await User.findByIdAndDelete(id);

    if(!deletedUser){
      res.json({
        success:false,
        message:"user not fond"
      })
    }
    res.status(200).json({
      success:true,
      user: deletedUser
    })
  }catch(err){
    res.status(500).json({
      success:false,
      message: err.message
    })

  }
})

export default users;