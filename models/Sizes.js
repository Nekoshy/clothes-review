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

export default mongoose.models.Size || mongoose.model("Size",SizesSchema)