import express from "express"
import OrderController from "../controllers/OrderController"
import { authMiddleware } from "../middlewares/auth"
const orderRouter = express.Router()
orderRouter.post("/createCheckout", authMiddleware, OrderController.createCheckoutSession)

export default orderRouter