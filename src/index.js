// const express = require("express");

import express from "express";

import mongoose from 'mongoose'

import dotenv from "dotenv";
import cors from "cors";
import dataBase from "../config/database.js";
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
      
     await dataBase()
    //  https://floating-depths-11719.herokuapp.com
    console.log(`https://floating-depths-11719.herokuapp.com`);
  } catch (error) {
    console.log(`${error.message}`);
  }
});
