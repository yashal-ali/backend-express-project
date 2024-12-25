import { app } from "./app.js";
import connectDB from "./db/index.js";
import  dotenv from "dotenv";


dotenv.config({
    path:'./.env'
})
connectDB().then(
    app.listen(process.env.PORT || 8000,()=>{
        console.log('app is succesfully connect to databse')
    })
).catch((error)=>{
    console.error()
    throw error
})