import { v4 as uuidv4 } from 'uuid'

function ProductList ({ items, search, key }) {
  return (
          <>
          <h1>Product List</h1>
          {
          items
            .filter((item) => item.toLowerCase().startsWith(search.toLowerCase()))
            .map((item) =>
              <p key = {uuidv4()}>{`${item}`}</p>
            )
  }
          </>
  )
}

export default ProductList
