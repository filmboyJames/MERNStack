const axios = require("axios");

function getPoke() {
axios.get("https://pokeapi.co/api/v2/pokemon/palkia")
.then(res=> console.log(res))
.catch(err=>console.error(err));

}

module.exports = getPoke;