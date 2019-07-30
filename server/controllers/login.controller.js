const validation =require('./validation.controller')
const bcrypt=require('bcrypt');

async function loginUser(req,res,next){
   
    //validate
    const{error}=validation.joivalidatelogin(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Check if login credentials match the database
    const login=await req.db.collection('users').findOne({email:req.body.email});
    if(!login) return res.status(400).send("not registered");
    
   
    isPasswordValid = await bcrypt.compare(req.body.password,login.password);
    if(!isPasswordValid) return res.status(400).send("password not valid");
    res.send('logged in');

}
module.exports={
    loginUser:loginUser
}