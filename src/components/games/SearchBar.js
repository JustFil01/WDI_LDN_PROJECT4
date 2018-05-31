import React from 'react';

const SearchBar = ({ handleGameSearch }) => {
  return(
    <div className="columns">
      <div className="field column is-5">
        <input className="input" placeholder="New Search" name="search" onChange={(e) => handleGameSearch(e.target.value)} />
      </div>
    </div>
  );
};

export default SearchBar;
