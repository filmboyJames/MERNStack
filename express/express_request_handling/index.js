const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let doctors = ['William', 'Patrick', 'Jon', 'Tom', 'Peter', 'Colin', 'Sylvester', 'Paul', 'John', 'Christopher', 'David', 'Matt', 'Peter', 'Jodie'];

app.use(express.json());
app.use(bodyParser.json());
//app.use - adds a piece of middleware to the chain. The below is a logger.
app.use((req, res, next) => {
    console.log("Request received at ", new Date());
    return next();
})

app.get("/", (req, res) => {
    res.send("Hello, my name is James!");
})

app.get("/getAll", (req, res) => {
    res.send(doctors);
});

app.get("/getDoctor/:id", (req, res, next) => {
    if(req.params.id>doctors.length) return next({status: 404, message: "This Doctor doesn't exist yet!"});
    console.log("ID:", req.params.id);
    const actualDoctor = parseInt(req.params.id) - 1;
    res.send(doctors[actualDoctor]);
});

app.delete("/removeDoctor/:id", (req, res, next) => {
    if(req.params.id>doctors.length) return next({status: 404, message: `No Doctor yet exists with id ${req.params.id}`});
    console.log("ID:", req.params.id);
    console.log(doctors.length);
    res.send(doctors.splice(req.params.id, 1));
    console.log(doctors);
    console.log("Doctor Eliminated ");
});

app.post("/createDoctor", (req, res, next) => {
    if(!req.body.name) return next("No body given - YOU DID IT WRONG");
    const name = req.body.name;
    console.log("name variable is ", name);
    doctors.push(name);
    console.log(doctors);
    res.status(201).send(doctors);
});

app.put("/updateDoctor/:id", (req, res, next) => {
    if(req.params.id>doctors.length) return next({status: 404, message: `You're trying to update a non-existent Doctor, with id ${req.params.id}`});
    console.log("ID:", req.params.id);
    console.log("QUERY:", req.query);
    const newDoctor = req.query.name;
    const oldDoctor = doctors[req.params.id];
    doctors[req.params.id] = newDoctor;
    res.send(`Replaced ${oldDoctor} with ${doctors[req.params.id]}`);
    console.log(doctors);
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.message || "Something went wrong");
});


const server = app.listen(1688, () => console.log(`Server successfuly started on port ${server.address().port}`));