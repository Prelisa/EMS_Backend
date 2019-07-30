const express=require('express');
const router= express.Router();
const app=express();

//local packages
const departmentController=require('../controllers/department.controller');
router.post('/department',(req,res,next)=>{
    departmentController.Department(req,res,next);
});
module.exports=router;