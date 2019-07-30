const joi=require('joi');

//val fun using JOI

function joivalidateUser(userInfo){
    const schema={
        name:joi.string().min(5).max(50).required(),
        email:joi.string().min(5).max(255).required().email(),
        password:joi.string().min(5).max(255).required(),
        age: joi.number().min(1).max(150).required(),
        address:joi.string().min(5).max(255).required(),
        contact:joi.number().min(10).required(),
        role:joi.string().required(),
        department:joi.string().required()
    };
    return joi.validate(userInfo,schema);
}

function joivalidatelogin(loginInfo){
    const schema={
        email: joi.string().min(5).max(255).required().email(),
        password:joi.string().min(5).max(255).required()
    };
    return joi.validate(loginInfo,schema);
}

function joivalidatedepartment(departmentInfo){
    const schema={
    
    name: joi.string().min(2).required()
    }
    return joi.validate(departmentInfo,schema);
}
module.exports={
    joivalidatedepartment:joivalidatedepartment,
    joivalidateUser:joivalidateUser,
    joivalidatelogin:joivalidatelogin
    
}