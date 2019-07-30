
const bcrypt=require('bcrypt');
const validation=require('./validation.controller');


async function registerUser(req,res,next){
    // const req.body={
    //     name:"admin",
    //     email:"admin@mail.com",
    //     age:20,
    //     address:"Kualalampur",
    //     password:"123456789",
    //     contact:1234567890,
    // };



    //Register validated user
    try{

                //validate user before registration
        const {error}=validation.joivalidateUser(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        console.log(req.body.email);

        //check email registered
        const user=await req.db.collection('users').findOne({email:req.body.email});
        if(user) return res.status(400).send("EMAIL ALREADY REGISTERED");

        //BCRYPT PASSWORD BEFORE
        const salt=await bcrypt.genSalt(10);
        req.body.password=await bcrypt.hash(req.body.password,salt);


        await req.db.collection('users').insertOne(req.body,(err,result)=>{
            if(err) res.json(error,304);
            console.log("user has just been registered"+ result.insertedCount);
            res.send("user has been registered");
        });
    } catch(err){
        res.send(err);
    }}
    module.exports={
        registerUser:registerUser
    }
