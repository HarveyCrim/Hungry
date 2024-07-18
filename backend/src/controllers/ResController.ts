import {Request, Response} from "express"
import { userModel } from "../models/user"
import resModel from "../models/restaurant"
import { cuisineList } from "../../cuisines"
cuisineList
const saveRestaurant = async (req: Request, res: Response) => {
    let cuisinesAct = []
    for(let i = 0; i < cuisineList.length; i++){
        if(req.body.cuisines[i]){
            cuisinesAct.push(cuisineList[i])
        }
    }
    req.body.cuisineList = cuisinesAct
    const email = res.locals.id
    const user = await userModel.findOne({email})
    const restaurant = await resModel.findOne({userId:user?._id})
    console.log("in here")
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

const getRestaurants = async (req: Request, res: Response) => {
    if(req.body.cuisineFilter){
        const rests = await resModel.find({
            city : req.body.city,
            cuisines : true
        })
        res.json(rests)
    }
    else{
        const rests = await resModel.find(req.body)
        res.json(rests)
    }
}

export default {
    saveRestaurant,getRestaurant, getRestaurants
}
