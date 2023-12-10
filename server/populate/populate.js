require("dotenv").config();
const mongoose = require("mongoose");
const mongo = process.env.MONGO_URL;
const KingdomModel = require("../models/kingdom.model.js")
const CountyModel = require("../models/county.model.js")
const BaronyModel = require("../models/barony.model.js")
const Baronies = require("./baronies.json");
const Counties = require("./counties.json");
const Kingdoms = require("./kingdoms.json");

if (!mongo) {
    console.error("Mongo URL not found!");
    process.exit(1); // exit the current program
  }

/* IMport baronies counties and kingdoms -> generate baronies, use the list that saves them and then generate counties with vassal generated from the baronies
(using Ref and a singular lord on the vassal side) -> generate kingdoms and do the same thing -> fetch all kingdoms, counties and baronies -> display all items that are required
increase wealth if an estate is connected to an another.
 */
  const populateKingdoms = async () =>{
    await KingdomModel.deleteMany({})

    const kingdomList = Kingdoms.kingdomNames.map((name)=>({
      name: name,
      wealth: Math.floor((Math.random() * 100 * 10) + 1000)
    }))
    await KingdomModel.create(...kingdomList)
    console.log("Kingdoms created!");
  };

  const populateCounties = async () =>{
    await CountyModel.deleteMany({})

    const countyList = Counties.countyNames.map((name)=>({
      name: name,
      wealth: Math.floor((Math.random() * 100 * 5) + 100)
    }))
    await CountyModel.create(...countyList)
    console.log("Counties created!");
  };

  const populateBaronies = async () =>{
    await BaronyModel.deleteMany({})

    const baronyList = Baronies.baronyNames.map((name)=>({
      name: name,
      wealth: Math.floor((Math.random() * 100) + 1)
    }))
    await BaronyModel.create(...baronyList)
    console.log("Baronies created!");
  };

  const main = async () => {
    await mongoose.connect(mongo);
  
    await populateKingdoms();
    await populateCounties();
    await populateBaronies();
  
    await mongoose.disconnect();
  };

  
main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
  