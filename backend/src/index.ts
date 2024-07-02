import express, {Request, Response} from "express"
import cors from "cors"
import "dotenv/config"
import mongoose, { mongo } from "mongoose"

const app = express()
app.use(express.json())
app.use(cors())
try{
    mongoose.connect(process.env.MONGO_URL!)
}
catch(err){
    console.log(err)
}
app.get("/", (req: Request, res: Response) => {
    res.json({"message" : "Hello"})
})
app.listen(process.env.PORT, () => console.log("listening"))