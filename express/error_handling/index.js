const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.get('/error', (req,res,next) => {
    const err = new Error(`AN ERROR OCCURED SIR`);
    next(err); 
})

const errorLogger = (err,req,res,next) => {
    console.log(`This is what is meant to be sent`,err.stack);
    next(err);
};

app.use(errorLogger);

const sendError = (err,req,res,next) => {
    res.status(500).send(err.message);
}

app.use(sendError);

const server = app.listen(4000, ()=> console.log(`Server successfully started on port ${server.address().port}`));
