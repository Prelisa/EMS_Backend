const validation =require('./validation.controller')

async function Department(req,res,next){
   
    //validate
    const {error}=validation.joivalidatedepartment(req.body);
    if(error) 
        return res.status(400).send(error.details[0].message);
    console.log(req.body.name);

    const department=await req.db.collection('department').findOne({name:req.body.name});
    if(department) return res.status(400).send("Department ALREADY REGISTERED");

    await req.db.collection('department').insertOne(req.body,(err,result)=>{
        if(err) res.json(error,304);
        console.log("Department has just been registered"+ result.insertedCount);
        res.send("Department has been registered");
    });
} 

module.exports={
    Department:Department
}

    
   