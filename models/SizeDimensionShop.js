import mongoose from 'mongoose'

const SizeDimensionShopsSchema = new mongoose.Schema({
    sizeId:{
        type:mongoose.Schema.ObjectId,
        ref:"Size",
        required:true,
    },
    dimensionId:{
        type:mongoose.Schema.ObjectId,
        ref:"Dimension",
        required:true,
    },
    shopId:{
        type:mongoose.Schema.ObjectId,
        ref:"Shop",
        required:true,
    },
    value:{
        type:Number,
        required:true,
    },
    show:{
        type:Boolean,
        required:true,
    }
})

export default mongoose.models.SizeDimensionShop || mongoose.model("SizeDimensionShop",SizeDimensionShopsSchema)