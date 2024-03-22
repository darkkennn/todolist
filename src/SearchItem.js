const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input 
            id = 'Search'
            type = 'text'
            role="Searchbox"
            placeholder="Search Items"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem