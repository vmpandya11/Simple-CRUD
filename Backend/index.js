const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const additems = require('./Modal/additem');

 require("./DB/db");

app.post("/", async (req, resp) => {
    let add = new additems(req.body);
    let result = await add.save();
    resp.send(result);
})

app.get("/getitems", async (req, resp) => {

    let add = await additems.find();
    if (add.length > 0) {
        resp.send(add);
    }
    else {
        resp.send({ result: "No Item Found" })
    }
})

app.delete("/getitems/:id", async (req, resp) => {
    const result = await additems.deleteOne({ _id: req.params.id })
    resp.send(result);
})

app.put("/getitems/:id", async (req, resp) => {
    let result = await additems.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        })
    resp.send(result)
})

app.get("/getitems/:id", async (req, resp) => {
    let result = await additems.findOne({ _id: req.params.id });
    if (result) {
        resp.send(result);
    }
    else {
        resp.send({ result: "No record found" })
    }
})
app.listen(4000);