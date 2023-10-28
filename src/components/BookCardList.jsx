import React from "react";
import { Button } from "./UI/Button";
import { BookCardItem } from "./BookCardItem.jsx";
import {useDispatch, useSelector } from "react-redux";
import { selectors, loadBooks } from "../slices/booksSlice";
import { loadMore } from "../constants";

export const BookCardList = () => {
  const books = useSelector(selectors.selectAll);
  const totalItems = useSelector((state) => state.booksSlice.totalItems);

  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.booksSlice.searchValue);
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(loadBooks(searchValue));
  };

  return (
    <>
      {Boolean(totalItems) && <div className="book-card-list__total-items">Found {totalItems} results</div>}
      <div className="book-card-list">
        {books.map((book, index) => <BookCardItem book={book} key={index} />)}
      </div>
      {Boolean(totalItems) && <Button clickHandler={clickHandler} style={'btn-load-more'}>{loadMore}</Button>}
    </>
  );
};
