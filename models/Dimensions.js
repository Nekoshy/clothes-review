import mongoose from 'mongoose'

const DimensionsSchema = new mongoose.Schema({
    dimensionsType:{
        type:String,
        required:true,
    }
})

export default mongoose.models.Dimension || mongoose.model("Dimension",DimensionsSchema)