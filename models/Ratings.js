import mongoose from 'mongoose'

const RatingsSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },
    shopId:{
        type:mongoose.Schema.ObjectId,
        ref:"Shop",
        required:true,
    },
    rating:{
        type:Boolean,
        required:true,
    }
})

export default mongoose.models.Rating || mongoose.model("Rating",RatingsSchema)