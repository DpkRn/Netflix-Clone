import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()
const databaseConnection=()=>{
   mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connection done !')
   }).catch((err)=>{
console.log(err)
   })
}
export default databaseConnection;