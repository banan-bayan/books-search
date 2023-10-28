import React from "react";
export const ButtonSearch = () => {
  
  return (
    <div className="btn-search" onClick={clickHandler}>
      <img className="btn-search__svg-search" src={searchIcon} />
    </div>
  );
};
