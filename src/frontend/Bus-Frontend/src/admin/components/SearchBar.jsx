import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search, setSearch, placeholder }) => {
  return (
    <div className="search-bar">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
                    width: "300px",
                    padding:"10px",
                    borderRadius: "6px",
                    marginTop: "20px",
                    marginBottom: "20px"
                }}
      />
    </div>
  );
};

export default SearchBar;