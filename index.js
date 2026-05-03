import dotenv from "dotenv";
import express from "express";
import connectDB from "./db.js";
import users from "./routes/users.js";


const app = express(); //register a express at application level
const PORT = process.env.PORT;
// body parser
// app.use(express.json()) // inbuild middleware for parse a json  
app.use('/api', users); // loaded a router file at application level 
// Hit the api localhost:3000/api/users use any method -> get,post,put,delete
dotenv.config();
// connect to database
connectDB();


app.get('/', (req, res) => {
  // res.send('Hello World Hi There ich bin zaid !')
  // res.sendFile('./dummy.html', {root:__dirname})
  console.log(req.body);
  
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
