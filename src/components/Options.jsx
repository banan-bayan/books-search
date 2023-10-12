import React from "react";
import { useDispatch } from "react-redux";
import { setCategoryType, setSortBy } from "../slices/booksSlice";

export const Options = ({ filterType }) => {
  const dispatch = useDispatch();
  const filterClick = (type) => (e) => {
    e.preventDefault();
    (type === "Categories") && dispatch(setCategoryType(e.target.value));
    (type === "Sorted") && dispatch(setSortBy(e.target.value));
  };
  return (
    <div className="select">
      <div className="select__selects">{filterType.name}</div>
      <select
        className="select__select"
        onChange={filterClick(filterType.name)}
      >
        {filterType.values.map((option) => (
          <option className="select__option" key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
