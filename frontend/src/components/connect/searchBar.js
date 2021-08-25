import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const history = useHistory();
  const onSubmit = (e) => {
    history.push(`?s=${searchQuery}`);
    e.preventDefault();
  };

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      return data.title.search(value) != -1;
    });
    setFilteredData(result);
  };

  return (
    <div>
      <form
        id="form"
        action="/"
        method="get"
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Search for Art/Creations"
          // value={searchQuery}
          onChange={(event) => handleSearch(event)}
          className="connect-searchbar"
          // name="s"
          id="header-search"
        />
      </form>
    </div>
  );
};

export default SearchBar;
