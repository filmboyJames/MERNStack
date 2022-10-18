function Basket ({ items, search, removeBasketItem }) {
  return (
        <>
        <h1>Basket</h1>
        {
        items
          .map((item, i) =>
            <p>
                {`${item}`}
                <button type="button" onClick={removeBasketItem}>X</button>
            </p>
          )
}
        </>
  )
}

export default Basket
