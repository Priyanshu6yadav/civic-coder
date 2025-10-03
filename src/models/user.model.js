import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
    user: {
        type: String,
        required: true,
        unique: true,
        lowecase: true,
        trim: true,
        index: true
    },
    email: {
        tiype: Strng,
        required: true,
        unique: true,
        lowecase: true,
        trim: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },

})



export const User = mongoose.model("User", userSchema)