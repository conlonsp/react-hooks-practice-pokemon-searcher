import React from "react";

function Search({ handleSearch }) {

  return (
    <div onChange={handleSearch} className="ui search">
      <div className="ui icon input">
        <input className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
