

import mongoose from "mongoose";

import dotenv from 'dotenv'


dotenv.config()

const dataBase = async() =>{

  try {
    
   await mongoose.connect(process.env.DATABASE,{
      useNewUrlParser: true,
      useUnifiedTopology: true , useFindAndModify: false   });
      

  } catch (error) {
    
  }
    
         
           
  
}

export default dataBase ;

// ,useCreateIndex: true,