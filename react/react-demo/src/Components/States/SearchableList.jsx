import { useState } from 'react'
import SearchBar from './SearchBar'

function SearchableList () {
  const [items, setItems] = useState(['Cups', 'Nutrageous Bar', 'Bunny'])
  const [search, setSearch] = useState('')
  const [newItem, setNewItem] = useState('')

  const addNewItem = (event) => {
    event.preventDefault()
    setItems((currentItems) => [...currentItems, newItem])
    setNewItem('')
  }

  return (
        <>
            <form onSubmit={addNewItem}>
                <label htmlFor="newItem">
                    Add Item to Product List
                    <input type="text" id="newItem" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
                </label>
                <button type="submit">Add This Item</button>
            </form>
            <SearchBar text={search} changeHandler={(e) => setSearch(e.target.value)} />
            <Basket props={items}/>
        </>
  )
}

export default SearchableList
