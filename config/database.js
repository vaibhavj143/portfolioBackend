

import mongoose from "mongoose";

import dotenv from 'dotenv'


dotenv.config()

const dataBase = async() =>{

  try {
    
   await mongoose.connect(process.env.DATABASE,{
      useNewUrlParser: true,
      useUnifiedTopology: true }) .then(data => {
        console.log(
            `Connected to Mongo! Database name: "${data.connections[0].name}"`,
        );
      
    })
    .catch(err => {
        console.error('Error connecting to mongo', err);
    });


  } catch (error) {
    console.log(error.message);
  }
    
         
           
  
}

export default dataBase ;

// ,useCreateIndex: true,