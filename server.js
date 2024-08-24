const dotenv = require("dotenv").config();
var jwtmiddleware = require("./middleware/jwt.mimiddleware");
const express = require("express");
const helmet = require("helmet");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");

const cors = require("cors");



var app = express();
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    origin: [ "http://localhost:3000"],
  })
);



const port = process.env.PORT || 7002;


 





app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




//connct mongo db
const dbConnection = require('./config/dbconfig')
dbConnection().then(()=>{
    console.log('db connected');
  
  }).catch((err)=>{
    console.log(err);
  })







const auth = require("./api/auth/router/auth.router");
app.use("/auth", auth);



const post = require("./api/post/router/post.router")
app.use("/posts",  jwtmiddleware.jwtauth, post)

app.listen(port,()=>{
    console.log("App is listning @",port)
     })