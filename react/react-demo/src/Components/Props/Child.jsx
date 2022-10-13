import Baby from "./Baby";

function Child(props){
    return(
        <>
        <h1>This is in the Child</h1>
        <p>{props.name}</p>
        <p>{props.age}</p>
        <Baby {...props}/>
        </>
    )
}

export default Child;