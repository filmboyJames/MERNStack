import { v4 as uuidv4 } from 'uuid'

function ProductList ({ items, search, updateBasketItem }) {
  return (
        <>
            <h1>Product List</h1>
            {
                items
                  .filter((item) => item.toLowerCase().startsWith(search.toLowerCase()))
                  .map((item) =>
                        <p key={uuidv4()}>{`${item}`}
                            <button type="button" onClick={updateBasketItem}>+1</button>
                            <button type="button" onClick={updateBasketItem}>-1</button>
                        </p>
                  )
            }
        </>
  )
}

export default ProductList
