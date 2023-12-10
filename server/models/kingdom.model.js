const mongoose = require("mongoose")

const KingdomSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true },
    vassals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "County"
    }],
    rank:  {
        type:String,
        default: "Kingdom"},
    wealth: Number,


})

module.exports = mongoose.model("Kingdom", KingdomSchema);