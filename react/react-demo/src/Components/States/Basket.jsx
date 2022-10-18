function Basket(props) {
    return(
        <>
        <p>Basket</p>
        {
        props
        .filter((item) => item.toLowerCase().startsWith(search.toLowerCase()))
        .map((item) => <p>{`${item}`}</p>)
}
        </>
    )
}

export default Basket