function SearchBar (props) {
  return (
        <>
        <label htmlFor="search">Search for a Product
        <input id="search" value={props.text} onChange={props.changeHandler}/>
        </label>
        </>
  )
}

export default SearchBar
