const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    manufacturer: {type: String, required: true},
    modal: {type: String, required: true},
    year: {type: Number, required: true},
    plate: {type: String, required:true },
    class: {type: String, required:true},
    imageUrl: {type: String, required:true}
})

module.exports = mongoose.model("Car", carSchema);
