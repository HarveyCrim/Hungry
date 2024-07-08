import {Request, Response} from "express"
import { userModel } from "../models/user"
import resModel from "../models/restaurant"
const saveRestaurant = async (req: Request, res: Response) => {
    console.log("user")
    const email = res.locals.id
    const user = await userModel.findOne({email})
    const restaurant = await resModel.findOne({userId:user?._id})
    if(restaurant){
        const updRes = await resModel.findByIdAndUpdate(restaurant._id, req.body, {new : true})
        res.json(updRes)
    }
    else{
        req.body.userId = user?._id
        const resNew =  await resModel.create(req.body)
        res.json(resNew)
    }
}

const getRestaurant = async (req: Request, res: Response) => {
    const user = await userModel.findOne({email : res.locals.id})
    const rest = await resModel.findOne({userId: user?._id})
    res.json(rest)
}

export default {
    saveRestaurant,getRestaurant
}
