const express=require('express');
const router=express.Router();
const Task=require('../models/task');
router.get('/',(req,res)=>{
    Task.find().exec((err, tasks) => {
        console.log(tasks);
    })
    res.json({
        status:'si funciona'
    });
})
module.exports=router;