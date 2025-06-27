const express = require("express");
const cors = require('cors'); // Installed cors using 'npm i cors' command.

const app = express();

 //good practice to load confirg from env file

 require("dotenv").config();
 const PORT=process.env.PORT || 4000;
  
 //middleware to parsejson request body
 app.use(express.json());
 app.use(cors()); // This will avoid cors error.

 //import routes for TODO API
 const todoRoutes = require("./routes/todo");

 //mount the todo API routes
 app.use("/api/v1",todoRoutes);

 //start server
 app.listen(PORT, ()=>{
     console.log(`Server started successfully at ${PORT}`);
 })
//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1>This is the HOMEPAGE Babyyy</h1>`);
})