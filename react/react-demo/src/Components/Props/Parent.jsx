import Child from "./Child";

function Parent(){
    return(
        <>
        <h1>This is the Parent</h1>
        <Child
        name="Joker"
        age={5}/>
        </>
    )
}

export default Parent;