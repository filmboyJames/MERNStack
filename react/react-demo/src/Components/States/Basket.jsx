import { v4 as uuidv4 } from 'uuid'

function Basket ({ items, search, removeBasketItem, key }) {
  return (
        <>
        <h1>Basket</h1>
        {
        items
          .map((item, i) =>
            <p key = {uuidv4()}>
                {`${item}`}
                <button type="button" onClick={removeBasketItem}>X</button>
            </p>
          )
}
        </>
  )
}

export default Basket
