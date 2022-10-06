const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let doctors = ['William', 'Patrick','Jon','Tom','Peter','Colin','Sylvester','Paul','John','Christopher','David','Matt','Peter','Jodie'];

app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.send("Hello, my name is James!");
})

app.get("/getAll", (req,res) => {
    res.send(doctors);
});

app.get("/getDoctor/:id", (req,res) => {
    console.log("ID:", req.params.id);
    console.log("QUERY:", req.query);
    const actualDoctor = parseInt(req.params.id)-1;
    res.send(doctors[actualDoctor]);
});

app.get("/removeDoctor/:id", (req,res) => {
    console.log("ID:", req.params.id);
    console.log(doctors[req.params.id], "has been removed");
    res.send(doctors.splice(req.params.id,1));
    console.log(doctors);
});

app.delete("/removeDoctor/:id", (req,res) => {
    console.log("ID:", req.params.id);
    res.send(doctors.splice(req.params.id,1));
    console.log(doctors);
});

app.post("/createDoctor", (req, res) => {
    doctors.push(req.body);
    console.log(doctors);
    res.status(201).send(doctors);
});

app.patch("/updateDoctor/:id", (req, res) => {
    console.log("ID:", req.param.id);
    console.log("QUERY:", req.query);
    res.send();
});


const server = app.listen(1688, () => console.log(`Server successfuly started on port ${server.address().port}`));