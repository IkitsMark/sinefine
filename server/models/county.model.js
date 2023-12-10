const mongoose = require("mongoose")

const CountySchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true },
    lord: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Kingdom"
    },
    vassals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Barony"
    }],
    rank:  {
        type: String,
        default: "County"},
    wealth: Number,


})

module.exports = mongoose.model("County", CountySchema);