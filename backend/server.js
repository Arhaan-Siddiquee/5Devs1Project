import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.Routes.js"
import connectToMongoDb from "./db/connecttomongodb.js";
import cookieParser from "cookie-parser"
const app=express();

dotenv.config();
const PORT=process.env.PORT;
app.use(cookieParser());
//(app.get("/",(req,res)=>{
   //root route 
//    res.send("hello world!")
//}))
app.use(express.json());// above all route-- before the routes at starting
app.use("/api/auth",authRoutes)

 //to parse the incomming requests with JSON payloads (from req.body)

app.listen(PORT,()=>{connectToMongoDb()
    console.log(`Server Running on PORT ${PORT}`)});