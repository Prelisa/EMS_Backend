const express=require('express');
const router= express.Router();
const app=express();

//local packages
const forgotpassController=require('../controllers/login.controller');

router.post('/login',(req,res,next)=>{
    forgotpassController.loginUser(req,res,next);
});
module.exports=router;