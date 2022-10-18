import { v4 as uuidv4 } from 'uuid'

function Basket ({ items, search, updateBasketItem, key }) {
  return (
        <>
        <h1>Basket</h1>
        {
        items
          .map((item, i) =>
            <p key = {uuidv4()}>
                {`${item} `}
                <button type="button" onClick={updateBasketItem}>+1</button>
                <button type="button" onClick={updateBasketItem}>-1</button>
            </p>
          )
}
        </>
  )
}

export default Basket
