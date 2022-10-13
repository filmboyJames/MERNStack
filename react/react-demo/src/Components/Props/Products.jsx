function Products(props){
    // const item = {
    //     name: "Coke",
    //     price: 2,
    //     description: "A drink"
    // }

    return(
        <>
        <p>Name: {props.name}</p>
        <p>Price: {props.price}</p>
        <p>Description: {props.description}</p>
        </>
    )
}

export default Products;