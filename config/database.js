

import mongoose from "mongoose";

import dotenv from 'dotenv'


dotenv.config()

const dataBase = () =>{
    
          mongoose.connect(process.env.DATABASE,{
            useNewUrlParser: true,
            useUnifiedTopology: true   }).then(() => console.log("Database connected!"))
            .catch(err => console.log(err));
  
}

export default dataBase ;