import { useState } from 'react'
import SearchBar from './SearchBar'
import Basket from './Basket'
import ProductList from './ProductList'

function ProductManager () {
  const [items, setItems] = useState(['Cups', 'Nutrageous Bar', 'Bunny'])
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [basketItems, setBasketItems] = useState(['Example - Hit X Button to remove'])
  const [newBasketItem, setNewBasketItem] = useState({ name: '', price: '', quantity: '0' })
  // To add to product list
  const addNewItem = (event) => {
    event.preventDefault()
    setItems((currentItems) => [...currentItems, newItem])
    setNewItem('')
  }
  // To add to basket
  const addNewBasketItem = (event) => {
    event.preventDefault()
    setBasketItems((currentItems) => [...currentItems, newBasketItem])
    setNewBasketItem('')
  }
  // To remove from basket via button
  const removeBasketItem = (index) => {
    const cloneBasketItems = [...basketItems]
    cloneBasketItems.splice(index, 1)
    setBasketItems(cloneBasketItems)
  }
  // To update basket
  const updateBasketItem = (event) => {
    event.preventDefault()
    setBasketItems((currentItems) => [...currentItems, newBasketItem])
    setNewBasketItem('')
  }

  return (
        <>
            <form onSubmit={addNewItem}>
                <label htmlFor='newItem'>
                    Add Item to Product List
                    <input type='text' id='newItem' value={newItem} onChange={(e) => setNewItem(e.target.value)} />
                </label>
                <button type='submit'>Add This Item</button>
            </form>
            <SearchBar text={search} changeHandler={(e) => setSearch(e.target.value)} />
            <ProductList items={items} search={search} />
            <form onSubmit={addNewBasketItem}>
                <label htmlFor='newBasketItem'>
                    Add Item to Basket
                    <input type='text' id='newBasketItem' value={newBasketItem} onChange={(e) => setNewBasketItem(e.target.value)} />
                </label>
                <button type='submit'>Add This Item</button>
            </form>
            {/* <Basket items={basketItems} updateBasketItem={(e) => removeBasketItem(e.target.value)} /> */}
            <Basket items={basketItems} updateBasketItem={(e) => removeBasketItem(e.target.value)} />
        </>
  )
}

export default ProductManager
