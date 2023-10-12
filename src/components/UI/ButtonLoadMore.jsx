import React from "react";
import { loadBooks } from "../../slices/booksSlice";
import { useDispatch, useSelector } from "react-redux";


export const ButtonLoadMore = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.booksSlice.searchValue);
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(loadBooks(searchValue));
  };

  return (
    <div className="btn-load-more">
      <button onClick={clickHandler} className="btn-load-more__btn">
        Load More
      </button>
    </div>
  );
};
