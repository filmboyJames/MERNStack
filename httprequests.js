'use strict'

const url = "https://reqres.in/"



fetch(url)
    .then((response)=> {
        if(response.status!==200){
        console.error("Status: ",response.status);
        return;
    }
    response.json()
    .then(data=>console.info(data))
}).catch((err)=>console.error("err"));

// axios.get("url");
//     .then(res => console.log(res))
//     .catch(err => console.error(err));

// const reqBody = {
//     "information"
// }

// axios.post("url", reqBody)
//     .then(res => console.log(res))
//     .catch(err => console.error(err));

