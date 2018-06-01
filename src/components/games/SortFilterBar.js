import React from 'react';
//------------------------------------------------------------------------------
const SortFilterBar = ({ handleChange, data}) => {
  return(
    <div className="thing">
      <div className="field column is-half">
        <input className="input" placeholder="Viewed Games" name="search" onChange={handleChange} value={data.search}/>
        <div className="field column2">
          <div className="control">
            <div className="select">
              <select onChange={handleChange} name="sort"
                value={data.sort}>
                <option value="name|asc">Name (A - Z)</option>
                <option value="name|desc">Name (Z - A)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
//------------------------------------------------------------------------------
export default SortFilterBar;
