require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const kingdomModel = require("./models/kingdom.model")
const baronyModel = require("./models/barony.model")
const countyModel = require("./models/county.model")

const { MONGO_URL, PORT = 8888 } = process.env;

if (!MONGO_URL) {
    console.error("Missing MONGO_URL environment variable");
    process.exit(1);
  }

const app = express();
app.use(express.json());
app.use(cors());

//EMPIRES Populálni kell

//KINGDOMS

app.get("/api/kingdoms", async (req,res, next)=>{
  try{
  const kingdomList = await kingdomModel.find().populate("vassals")
  console.log(kingdomList)
  return res.json(kingdomList)
}
  catch(err){
    next(err)
  }
})

app.post("api/kingdoms", async(req,res,next)=>{
  try{
    const newKingdom = await kingdomModel.create( req.body)
    console.log(newKingdom)
    return res.json(newKingdom)
  }catch(err){
    next(err)
  }
})

app.delete("api/kingdoms", async(req,res,next)=>{
  try{
    await kingdomModel.findByIdAndDelete({_id: req.body.id})
  }catch(err){
    next(err)
  }
})

//new function in delete and create requests

//COUNTIES

app.get("/api/counties", async (req,res, next)=>{
  try{
  const kingdomList = await countyModel.find().populate("vassals")
  console.log(kingdomList)
  return res.json(kingdomList)
}
  catch(err){
    next(err)
  }
})

app.post("api/counties", async(req,res,next)=>{
  try{
    const newCounty = await countyModel.create( req.body)
    console.log(newCounty)
    return res.json(newCounty)
  }catch(err){
    next(err)
  }
})

app.delete("api/counties", async(req,res,next)=>{
  try{
    let countyToDelete = req.body
    await countyModel.findByIdAndDelete({_id: req.body.id})
    return res.json(countyToDelete)
  }catch(err){
    next(err)
  }
})

//BARONIES

app.get("/api/baronies", async (req,res, next)=>{
  try{
  const baronyList = await baronyModel.find()
  console.log(baronyList)
  return res.json(baronyList)
}
  catch(err){
    next(err)
  }
})

app.post("api/baronies", async(req,res,next)=>{
  try{
    const newBarony = await baronyModel.create( req.body)
    console.log(newBarony)
    return res.json(newBarony)
  }catch(err){
    next(err)
  }
})

app.delete("api/baronies", async(req,res,next)=>{
  try{
    let baronyToDelete = req.body
    await baronyModel.findByIdAndDelete({_id: req.body.id})
    return res.json(baronyToDelete)
  }catch(err){
    next(err)
  }
})

const main = async () => {
    await mongoose.connect(MONGO_URL);
  
    app.listen(PORT, () => {
      console.log(`App is listening on ${PORT}`);
      console.log("Try /api/kingdoms route right now");
    });
  };
  
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
  