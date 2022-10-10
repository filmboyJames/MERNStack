const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tdp_db",{
    useNewUrlParser: true;
});

//makes a new Schema
const duckSchema = new mongoose.Schema({
    disposition: {
        type: String,
        require: true
        }
    colour: String,
    name {
        type: String,
        require: true
    }
})

const duckModel = mongoose.model("duck", duckSchema); //object with all the mongo functions, and this is what is exported to allow the functions to be used

module.exports = {
    duckModel
}