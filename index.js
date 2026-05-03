import dotenv from "dotenv";
import express from "express";
import connectDB from "./db.js";
import users from "./routes/users.js";


const app = express();
const PORT = process.env.PORT;
// body parser
app.use(express.json())
app.use('/api', users);
// Hit the api /api/users
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
