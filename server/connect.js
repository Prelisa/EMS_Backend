const mongoclient=require('mongodb').MongoClient;

const dburl=`${process.env.DATABASE_CONNECTION}${process.env.DATABASE_NAME}`;
mongoclient.connect(dburl,{useNewUrlParser: true},(err,db)=>{
    if(err) res.json(error,404);
    console.log("database connected");
    app.locals.database=db.db(process.env.DATABASE_NAME);
});
module.exports= {
    dburl:dburl
}