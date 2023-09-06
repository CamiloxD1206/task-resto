const express=require('express');
const router=express.Router();
const Task=require('../models/task');
router.get('/',(req,res)=>{
    Task.find({})
        .then(tasks => console.log(tasks))
        .catch(err => console.error(err));
    res.json({
        status:'si funciona'
    });
})
module.exports=router;