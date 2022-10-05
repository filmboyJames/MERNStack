'use strict'
function getUsers() {
    axios.get("https://reqres.in/api/users")
        .then(res => console.log(res))
        .catch(err => console.error(err));
}

function createUser() {
    const name = document.getElementById("userName").value;
    console.log("NAME: ", name);
    axios.post("https://reqres.in/api/users", {
        name,
        "job": "Leader"
    })
        .then(res => console.log(res))
        .catch(err => console.error(err));

}

const person1 = {
    "firstName" : "James",
        "lastName" : "Stewart",
            "age" : 37,
                "height" : 185,
                    "hobbies": [
                        "Television",
                        "Games",
                        "Travel"
                    ]
}

const person2 = {
    "firstName" : "Rachel",
        "lastName" : "Stewart",
            "age" : 34,
                "height" : 168,
                    "hobbies": [
                        "Knitting",
                        "Television",
                        "Travel"
                    ]
}

const person3 = {
    "firstName" : "Maisie",
        "lastName" : "Stewart",
            "age" : 2,
                "height" : 89,
                    "hobbies": [
                        "Television",
                        "Triking",
                        "Slides"
                    ]
}

const person4 = {
    "firstName" : "Fiona",
        "lastName" : "Stewart",
            "age" : 64,
                "height" : 168,
                    "hobbies": [
                        "Cooking",
                        "Knitting",
                        "Travel"
                    ]
}

db.people.updateOne(
    {
        "firstName": "James",
        "surname": "Stewart"
    },
    {
        "$push": {
            "hobbies": "Roulette"
        }
    }
)