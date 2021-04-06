const express=require('express');
const mongoose=require('mongoose');

const app=express();

// schema for foods collection
const foodSchema=new mongoose.Schema({
    name:String,
    calories:Number,
    protiens:Number,
    carbs:Number,
    fats:Number,
    fibre:Number,
    weight:Number,

})
const foodmodel=new mongoose.model("food",foodSchema);



// mongoconnection
mongoose.connect("mongodb://127.0.0.1:27017/nutrition",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("connected");
})

app.post("/food/create",(req,res)=>{


     const food=req.body;
    let foodObj=new foodmodel(food);
    foodObj.save().then(()=>{
        res.send({status:"food stored"});
    })


res.send({status:"food stored"});
})

// app.get('/demo',(req,res)=>{
//     console.log('get req called');
//     res.send("response is done");
// })
//  app.listen(8000);