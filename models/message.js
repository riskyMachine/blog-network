const mongoose = require('mongoose')
const validator = require('validator')


const messageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true   
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
        }
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps: true
})

messageSchema.methods.toJSON = function(){
    const user = this
    const userObject = user.toObject()
    delete userObject._id
    delete userObject.__v
    
    return userObject
}

const Message = mongoose.model('Message',messageSchema)

module.exports = Message 