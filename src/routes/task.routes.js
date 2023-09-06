const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    res.json({
        status:'si funciona'
    })
})
module.exports=router;