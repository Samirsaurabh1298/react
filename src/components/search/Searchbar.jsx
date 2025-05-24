import "./searchbar.css"

const SearchBar = ({ searchText, setSearchText, onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="search">
      <input
        type="search"
        className="search-box"
        autoFocus
        required
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <i
        className="fa fa-search"
        onClick={onSearch}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default SearchBar;