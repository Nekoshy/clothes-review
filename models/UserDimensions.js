import mongoose from 'mongoose'

const UserDimensionsSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },
    dimensionId:{
        type:mongoose.Schema.ObjectId,
        ref:"Dimension",
        required:true,
    },
    value:{
        type:Number,
        required:true,
    }
})

export default mongoose.models.UserDimension || mongoose.model("UserDimension",UserDimensionsSchema)