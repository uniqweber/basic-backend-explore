const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3000, () => console.log("server running on", 3000));

/* 
 what is database
 types of database 
 what is sql and nosql
 why we need 
 what is mongodb
 why mongodb 
 how to use mongodb 
 what is mongoose
 what is data management system

installation of mongodb
what is mongoose
what is odm 
what is orm

 technologies: 
 what is collections, 
 what is documents, 
 what is schemas, 
 what is keys,
 what is models
*/
