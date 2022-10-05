const cows = require("cowsay");

const cowgo = (speech,eyes,tongue) => cows.say({
    text: speech,
    e : eyes,
    T : tongue,
    //f : "USA",
    d: true
    //'r' : true
});

const cowthink = cows.think;

module.exports = {
    cowgo,
    cowthink
}