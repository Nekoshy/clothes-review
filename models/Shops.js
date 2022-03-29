import mongoose from 'mongoose'

const ShopsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Podaj nazwę sklepu"]
    },
    img:{
        type:String
    },
    link:{
        type:String,
        required:[true,"Podaj link do strony sklepu"]
    }
})

export default mongoose.models.Shop || mongoose.model("Shop",ShopsSchema)