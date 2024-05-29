const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password:String,
});
module.exports = mongoose.model("additems", employeeSchema)