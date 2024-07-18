import express from "express"
import { authMiddleware } from "../middlewares/auth"
import resContoller from "../controllers/ResController"
const resRouter = express.Router()

resRouter.post("/save", authMiddleware, resContoller.saveRestaurant)
resRouter.get("/", authMiddleware, resContoller.getRestaurant)
resRouter.get("/restaurants", authMiddleware, resContoller.getRestaurants)
export default resRouter 