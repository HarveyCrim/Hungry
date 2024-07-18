import mongoose from "mongoose"

const MenuItem = new mongoose.Schema({
    itemName: String,
    itemPrice: Number
})

const restarurantSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    name : {
        type: String,
        required : true
    },
    city: String,
    country: String,
    deliveryPrice: {
        type: Number,
        required: true
    },
    deliveryTime: Number,
    cuisines: [Boolean],
    cuisineList: [String],
    menuItems: [MenuItem],
    imageUrl: String
})

const resModel = mongoose.model('Restaurant', restarurantSchema)
export default resModel