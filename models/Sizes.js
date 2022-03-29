import mongoose from 'mongoose'

const SizesSchema = new mongoose.Schema({
    gender:{
        type:String,
        required:true
    },
    sizes:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Size",SizesSchema)