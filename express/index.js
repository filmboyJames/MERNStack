const express = require("express");

const app = express();

const ducks = [];

app.use(bodyParser.json());

app.get("/hello", (req, res) => {
    res.send("Hello, world!")
});

app.post("/createDuck", (req, res) => {
    ducks.push(req.body);
    res.status(201).send(ducks);
});

app.patch("/updateDuck/:id", (req, res) => {
    console.log("ID:", req.param.id);
    console.log("QUERY:", req.query);
    res.send();
});


app.delete("/removeDuck/:id", (req,res) => {
    console.log("ID:", req.param.id);
    res.send();
});

const server = app.listen(4494, () => console.log(`Server successfuly started on port ${server.address().port}`));