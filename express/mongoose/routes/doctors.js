const router = require('express').Router();
const { doctorModel } = require("../db");

router.get("/getAll", (req, res) => doctorModel.find({}).then(results => res.send(results)).catch(err => next(err)));

router.get("/getDoctor/:id", (req, res, next) => doctorModel.find({'name': req.params.id }).then(results => res.send(results)).catch(err => next(err)));

router.post("/createDoctor", (req, res, next) => doctorModel.create(req.body).then(results => res.status(201).send(results)).catch(err => next(err)));
    
router.delete("/removeDoctor/:id", (req, res, next) => doctorModel.deleteOne({'name':req.params.id}).then(results => res.status(201).send(results)).catch(err => next(err)));

router.put("/updateDoctor/:oldDoctor/:newDoctor", (req, res, next) => doctorModel.updateOne({'name': req.params.oldDoctor},{$set:{'name': req.params.newDoctor}}).then(results => res.status(201).send(results)).catch(err => next(err)));

module.exports = router;