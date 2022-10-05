const cows = require("cowsay");

const cowgo = (speech,eyes,tongue) => cows.say({
    text: speech,
    e : eyes,
    T : tongue,
    //f : "USA", //Specific cows
    //d: true //Different modes, d=dead for example
    'r' : true //random cow
});

const cowthink = cows.think;

module.exports = {
    cowgo,
    cowthink
}