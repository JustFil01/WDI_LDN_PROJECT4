import React from 'react';
//------------------------------------------------------------------------------
const SearchBar = ({ handleGameSearch }) => {
  return(
    <div className="thing">
      <div className="field column is-5">
        <input className="input" placeholder="New Games" name="search" onChange={(e) => handleGameSearch(e.target.value)} />
      </div>
    </div>
  );
};
//------------------------------------------------------------------------------
export default SearchBar;
