const router = require('express').Router();
const { doctorModel } = require("../db");

router.get("/getAll", (req, res) => doctorModel.find({}).then(results => res.send(results)).catch(err => next(err)));

router.get("/getDoctor/:id", (req, res, next) => doctorModel.find({ 'name': req.params.id }).then(results => res.send(results)).catch(err => next(err)));

// router.post("/createDoctor", (req, res, next) => doctorModel.create(req.body).then(results => res.status(201).send(results)).catch(err => next(err)));

router.delete("/removeDoctor/:id", (req, res, next) => doctorModel.deleteOne({ 'name': req.params.id }).then(results => res.status(201).send(results)).catch(err => next(err)));

router.put("/updateDoctorName/:oldDoctor/:newDoctor", (req, res, next) => doctorModel.updateOne({ 'name': req.params.oldDoctor }, { $set: { 'name': req.params.newDoctor } }).then(results => res.status(201).send(results)).catch(err => next(err)));

// router.patch("/updateDoctorElement/:oldDoctor/:newDoctor", (req, res, next) => doctorModel.updateOne({ 'name': req.params.oldDoctor }, { $set: { 'name': req.params.newDoctor } }).then(results => res.status(201).send(results)).catch(err => next(err)));


router.post("/createDoctor", async (req, res, next) => {
    if(!req.body.name) return next({status:400, message: "Missing name"});
    try { //attempts to create the doc
        const result = await doctorModel.create(req.body);
        res.status(201).send(result);
    } catch (err) { //catches any errors
        return next(err);
    }
});

router.patch("/updateDoctorElement/:element/:oldDoctor", async (req, res, next) => {
    if(0) return next({status:400, message: "Doctor does not exist to update"});
    try{
        //const result = await doctorModel.updateOne({ 'name': req.params.oldDoctor }, { $set: { 'name': req.params.newDoctor }});
        const newDoctor = await doctorModel.findById(req.params.query);
        res.send(newDoctor);
    } catch(err) {
        return next(err);
    }

});

module.exports = router;