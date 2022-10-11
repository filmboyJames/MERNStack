const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const doctorRoutes = require('./routes/doctors.js');


app.use(express.json());
app.use(bodyParser.json());
//app.use - adds a piece of middleware to the chain. The below is a logger.

const logger = (req, res, next) => {
    console.log("Request received at ", new Date());
    return next();
}

app.get("/", (req, res) => {
    res.send("Hello, my name is James and I love Doctor Who!");
})

app.use('/doctors', logger, doctorRoutes);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.message || "Something went wrong");
});

const server = app.listen(1688, () => console.log(`Server successfuly started on port ${server.address().port}`));