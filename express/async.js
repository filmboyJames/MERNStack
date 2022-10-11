console.log("Starting this code");

async function asyncFunction1() {
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>console.log('asyncFunction1'),3000);
    });
    let result = await promise;
    return result;
}

async function asyncFunction2() {
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>console.log('asyncFunction2'),2000);
    });
    let result = await promise;
    return result;
}

async function asyncFunction3() {
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>console.log('asyncFunction3'),1000);
    });
    let result = await promise;
    return result;
}

async function doThings() {
    asyncFunction1();
    asyncFunction2();
    asyncFunction3();
    console.log("All done");
   
}

doThings();
