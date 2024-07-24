import express from "express" ;
import cors from "cors" ;
import dotenv from "dotenv" ;
import DBconnect from "./database/Dbconnect.js";
import  reservation from "./routes/reservationRoute.js"

 dotenv.config() ;

const app = express() ;

app.use(express.json()) ;
app.use(cors()) ;

DBconnect() ;

app.get("/", (req, res) => {
	res.send(`<h1> Hello Vinod </h1>`)
});

app.use( "/api/v1" , reservation ) ;
app.listen(process.env.PORT  , () =>{
    console.log(`Server is running on ${process.env.PORT}`)
});

export default app ;