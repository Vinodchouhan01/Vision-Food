import { mongoose } from "mongoose";
import  dotenv from 'dotenv';
dotenv.config() ;
// console.log("mongourl" , process.env.Mongo_Url) ;

const DBconnect = ()=>{
        mongoose.connect(process.env.Mongo_Url) 
        .then(() => console.log("DB Connected Successfully"))
        .catch( (error) => {
            console.log("DB Connection Failed");
            console.error(error);
            process.exit(1);
        } )
}

export default DBconnect ;