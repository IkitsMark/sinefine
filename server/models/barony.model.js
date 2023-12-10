const mongoose = require("mongoose")

const BaronySchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true },
    lord: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"County"
    },
    rank:  {
        type:String,
        default: "Barony"},
    wealth: Number,


})

module.exports = mongoose.model("Barony", BaronySchema);