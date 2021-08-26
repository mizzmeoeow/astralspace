import React, { useState } from "react";

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for Art/Creations"
        value={wordEntered}
        onChange={handleFilter}
        className="connect-searchbar"
      />
      <div>
        {filteredData.length != 0 && (
          <div className="">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <a className="" href={value.link}>
                  <p>{value.title}</p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
