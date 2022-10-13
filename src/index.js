// const express = require("express");

import express from "express";

import mongoose from 'mongoose'

import dotenv from "dotenv";
import cors from "cors";
// import dataBase from "../config/database.js";
import visitorRoutes from "../routes/visitor.routes.js";

const app = express();

dotenv.config();
// middleware  handlers  express routes
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cors());

// data base connected


app.get('/',(req,res)=>{

  res.status(200).send({
    success:true,
    message:"deployed"
  })
})

app.use("/portfolio/api", visitorRoutes);



app.listen(process.env.PORT|| '5050', async () => {
  try {
      //  let mongo =  await  dataBase();
    //  await dataBase()

      await mongoose.connect(process.env.DATABASE, 
        {
          useNewUrlParser: true,
          useUnifiedTopology: true }
        )
    
        console.log("database connect");

    console.log(`http://localhost:${process.env.PORT|| '5050'}`);
  } catch (error) {
    console.log(`${error.message}`);
  }
});
