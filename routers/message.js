const express = require('express')
const Message = require('../models/message')
const router = new express.Router()

router.post('/message', async (req,res) => {
    try{
        console.log('Running')
        const msg = new Message(req.body)
        const result = await msg.save()
        if(result._id){
            return res.send({ "status": "success" })
        }
        res.send({"status": "failed", "error": "Invalid record format."})
    }catch(e){
        res.send({"status": "failed", "error": "Something went wrong"})
    }
})

router.get('/message', async (req,res) => {
    try{
        if(!(req.query.pswd == "riskyMachine")) return res.send({ "status": "failed", "error": "Unauthorised Access" })
        const result = await Message.find()
        if(result.length == 0){
            return res.send({ "status": "success", "msg": "No data found"})
        }
        res.send(result)
    
    }catch(e){
        res.send({"status": "failed", "error": "Something went wrong"})
    }
})

router.post('/message/deleteAll', async (req,res) => {
    try{
        if(!(req.query.pswd == "riskyMachine")) return res.send({ "status": "failed", "error": "Unauthorised Access" })
        const result = await Message.deleteMany({})
        res.send(result)
    }catch(e){
        res.send({"status": "failed", "error": "Something went wrong"})
    }
})


module.exports = router 