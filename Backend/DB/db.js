const mongoose = require('mongoose');

let url = "mongodb://localhost:27017/task"
mongoose.connect(url);
 
const db = mongoose.connection;

db.on("connected", () => {
    console.log("Database is Successfully Connected");
});

db.on("error", () => {
    console.log("Some error occurred");
});

db.on("disconnected", () => {
    console.log("Database is disconnected");
});

module.exports = db;
