const express= require('express');
const mongoclient=require('mongodb').MongoClient;
const bodyparser=require('body-parser');
const app=express();
require('dotenv').config();
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.json());
const cors = require('cors');
const userRoute=require('./routes/registration.route')
const userRouteLogin=require('./routes/login.route')
const userRouteDepartment=require('./routes/department.route')
const crudRoute=require('./routes/crud.route');




//midlleware to register db object in req.db
app.use((req,res,next)=>{
    req.db=app.locals.database;
    next();
});
app.use(cors());
app.use(userRouteLogin);
app.use(userRoute);
app.use(userRouteDepartment);
app.use(crudRoute);

//connect to MDB


const dburl=`${process.env.DATABASE_CONNECTION}${process.env.DATABASE_NAME}`;
mongoclient.connect(dburl,{useNewUrlParser: true},(err,db)=>{
    if(err) res.json(error,404);
    console.log("database connected");
    app.locals.database=db.db(process.env.DATABASE_NAME);
});

 //listening to server
 app.listen(process.env.PORT || 5000,()=>{
    console.log("Server has been started at port 5000");
});
