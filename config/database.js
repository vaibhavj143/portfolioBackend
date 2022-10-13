

import mongoose from "mongoose";

import dotenv from 'dotenv'

dotenv.config()

const dataBase = async() =>{

  try {
    
   await mongoose.connect(process.env.DATABASE ||'mongodb+srv://vaibhav_j143:9414725512rubY.@cluster0.p53xw.mongodb.net/visitor?retryWrites=true&w=majority' ,
   {
      useNewUrlParser: true,
      useUnifiedTopology: true }
      ) ;

  } catch (error) {
    console.log(error.message);
  }
    
         
           
  
}

export default dataBase ;

// ,useCreateIndex: true,