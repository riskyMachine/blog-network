const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    blog:{
        type: mongoose.Schema.Types.Mixed
    }
},{
    timestamps: true
})

const Blog = mongoose.model('Blog',blogSchema)

module.exports = Blog