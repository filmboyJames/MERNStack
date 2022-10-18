function ProductList ({ items, search }) {
  return (
          <>
          <h1>ProductList</h1>
          {
          items
            .filter((item) => item.toLowerCase().startsWith(search.toLowerCase()))
            .map((item) =>
              <p>{`${item}`}</p>
            )
  }
          </>
  )
}

export default ProductList
