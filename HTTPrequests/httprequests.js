'use strict'

const url = "https://reqres.in/api/users"



// fetch(url)
//     .then((response)=> {
//         if(response.status!==200){
//         console.error("Status: ",response.status);
//         return;
//     }
//     response.json()
//     .then(data=>console.info(data))
// }).catch((err)=>console.error("err"));


    axios.get(url)
        .then(res => console.log(res))
        .catch(err => console.error(err));


document.getElementById("requestForm").addEventListener("submit", function(event) {
   event.preventDefault();
   console.log("Event: ", event);
   const form = event.target;
   console.log("FormL ",form);
   const reqBody = {
    first_name: form.input1.value,
    email: form.input2.value,
    }

axios.post(url, reqBody)
    .then(res => console.log(res))
    .catch(err => console.error(err));
});
