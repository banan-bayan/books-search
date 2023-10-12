import React from "react";
import { ButtonLoadMore } from "./UI/ButtonLoadMore";
import { BookCardItem } from "./BookCardItem.jsx";
import { useSelector } from "react-redux";
import { selectors } from "../slices/booksSlice";

export const BookCardList = () => {
  const books = useSelector(selectors.selectAll);
  const totalItems = useSelector((state) => state.booksSlice.totalItems);

  return (
    <>
      {Boolean(totalItems) && <div className="book-card-list__total-items">Found {totalItems} results</div>}
      <div className="book-card-list">
        {books.map((book, index) => <BookCardItem book={book} key={index} />)}
      </div>
      {Boolean(totalItems) && <ButtonLoadMore />}
    </>
  );
};
