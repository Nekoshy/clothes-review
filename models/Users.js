import mongoose from 'mongoose'

const UsersSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Proszę podać nazwę"],
    },
    email:{
        type:String,
        required:[true,"Podaj email"]
    },
    password:{
        type:String,
        required:[true,"Podaj hasło"]
    },
    gender:{
        type:String,
        required:true
    }
})

export default mongoose.models.User || mongoose.model("User", UsersSchema)