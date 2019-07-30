const express=require('express');
const router= express.Router();
const app=express();

//local packages
const registrationController=require('../controllers/registration.contoller');

router.post('/register',(req,res,next)=>{
    registrationController.registerUser(req,res,next);
});
module.exports=router;