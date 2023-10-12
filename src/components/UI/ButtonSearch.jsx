import React from "react";
import searchIcon from "../../../public/assets/icons/search-svgrepo-com.svg";
import { loadBooks } from "../../slices/booksSlice";
import { useDispatch, useSelector } from "react-redux";

export const ButtonSearch = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.booksSlice.searchValue);
  const clickHandler = (e) => {
    e.preventDefault();
    if (!searchValue) return;
    dispatch(loadBooks(searchValue));
  };
  return (
    <div className="btn-search" onClick={clickHandler}>
      <img className="btn-search__svg-search" src={searchIcon} />
    </div>
  );
};
