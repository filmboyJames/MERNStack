function SearchBar ({ text, changeHandler }) {
  return (
        <>
        <label htmlFor="search">Search for a Product
        <input id="search" value={text} onChange={changeHandler}/>
        </label>
        </>
  )
}

export default SearchBar
