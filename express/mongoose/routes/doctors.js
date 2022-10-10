const router = require('express').Router();
const { doctorModel } = require("../db");

// let doctors = ['William', 'Patrick', 'Jon', 'Tom', 'Peter', 'Colin', 'Sylvester', 'Paul', 'John', 'Christopher', 'David', 'Matt', 'Peter', 'Jodie'];

router.get("/getAll", (req, res) => doctorModel.find({}).then(results => res.send(results)).catch(err => next(err)));

router.get("/getDoctor/:id", (req, res, next) => doctorModel.find({ '_id': req.params.id }).then(results => res.send(results)).catch(err => next(err)));

router.post("/createDoctor", (req, res, next) => doctorModel.create(req.body).then(results => res.status(201).send(results)).catch(err => next(err)));
    

router.delete("/removeDoctor/:id", (req, res, next) => {
    if (req.params.id > doctors.length) return next({ status: 404, message: `No Doctor yet exists with id ${req.params.id}` });
    console.log("ID:", req.params.id);
    console.log(doctors.length);
    res.send(doctors.splice(req.params.id, 1));
    console.log(doctors);
    console.log("Doctor Eliminated ");
});

router.put("/updateDoctor/:id", (req, res, next) => {
    if (req.params.id > doctors.length) return next({ status: 404, message: `You're trying to update a non-existent Doctor, with id ${req.params.id}` });
    console.log("ID:", req.params.id);
    console.log("QUERY:", req.query);
    const newDoctor = req.query.name;
    const oldDoctor = doctors[req.params.id];
    doctors[req.params.id] = newDoctor;
    res.send(`Replaced ${oldDoctor} with ${doctors[req.params.id]}`);
    console.log(doctors);
});

module.exports = router;