import mongoose from 'mongoose'

const UsersSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Proszę podać nazwę"],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"Podaj email"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Podaj hasło"]
    },
    gender:{
        type:String,
        required:true
    },
    token:{
        type:String,
    }
})

export default mongoose.models.User || mongoose.model("User", UsersSchema)