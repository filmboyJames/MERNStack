const router = require('express').Router();
const { doctorModel } = require("../db");

// let doctors = ['William', 'Patrick', 'Jon', 'Tom', 'Peter', 'Colin', 'Sylvester', 'Paul', 'John', 'Christopher', 'David', 'Matt', 'Peter', 'Jodie'];

router.get("/getAll", (req, res) => doctorModel.find({}).then(results => res.send(results)).catch(err => next(err)));

router.get("/getDoctor/:id", (req, res, next) => {
    if(req.params.id>doctors.length) return next({status: 404, message: "This Doctor doesn't exist yet!"});
    console.log("ID:", req.params.id);
    const actualDoctor = parseInt(req.params.id) - 1;
    res.send(doctors[actualDoctor]);
});

router.delete("/removeDoctor/:id", (req, res, next) => {
    if(req.params.id>doctors.length) return next({status: 404, message: `No Doctor yet exists with id ${req.params.id}`});
    console.log("ID:", req.params.id);
    console.log(doctors.length);
    res.send(doctors.splice(req.params.id, 1));
    console.log(doctors);
    console.log("Doctor Eliminated ");
});

router.post("/createDoctor", (req, res, next) => {
    if(!req.body.name) return next("No body given - YOU DID IT WRONG");
    const name = req.body.name;
    console.log("name variable is ", name);
    doctors.push(name);
    console.log(doctors);
    res.status(201).send(doctors);
});

router.put("/updateDoctor/:id", (req, res, next) => {
    if(req.params.id>doctors.length) return next({status: 404, message: `You're trying to update a non-existent Doctor, with id ${req.params.id}`});
    console.log("ID:", req.params.id);
    console.log("QUERY:", req.query);
    const newDoctor = req.query.name;
    const oldDoctor = doctors[req.params.id];
    doctors[req.params.id] = newDoctor;
    res.send(`Replaced ${oldDoctor} with ${doctors[req.params.id]}`);
    console.log(doctors);
});

module.exports = router;