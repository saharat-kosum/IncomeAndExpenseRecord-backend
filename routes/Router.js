const express = require('express')
const router = express.Router()
const recordModel = require('../models/recordModel')

router.get('/', (req,res)=>{
    recordModel.find((err, records) => {
        if (err) {
            res.send(err)
        } else {
            res.send(records)
        }
    });
})

router.post('/save', (req,res)=>{
    const inputData = { 
        text:req.body.text, 
        amount:req.body.amount
    }
    recordModel.create(inputData, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.redirect('/')
        }
    })
})

router.post('/update', (req,res)=>{
    const updateData = {
        text:req.body.text,
        amount:req.body.amount
    }
    recordModel.findByIdAndUpdate(req.body.id,updateData, (err,data)=>{
        if (err) {
            res.send(err)
        } else {
            res.redirect('/')
        }
    })
})

router.post('/delete', (req,res)=>{
    recordModel.findByIdAndDelete(req.body.id, (err,data)=>{
        if (err) {
            res.send(err)
        } else {
            res.redirect('/')
        }
    })
})

module.exports = router