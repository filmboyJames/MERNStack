const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/doctors",{
    useNewUrlParser: true
});

//makes a new Schema
const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
        },
    startYear: Number,
    endYear: Number
});



//will create a PLURALISED version
const doctorModel = mongoose.model("doctor", doctorSchema); //object with all the mongo functions, and this is what is exported to allow the functions to be used

module.exports = {
    doctorModel
}