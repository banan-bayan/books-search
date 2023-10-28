import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectors } from "../slices/booksSlice";

export const BookPage = () => {
  const { bookId } = useParams()
  const book = useSelector((state) => selectors.selectById(state, bookId));

  return (
    <div className="book-page">
      <div className="book-page__img">
        <img src={book.linkImg} alt='img' className="book-page__img-img" />
      </div>
      <div className="book-page__info">
        <div className="book-page__category">{book.category}</div>
        <div className="book-page__title">{book.title}</div>
        <div className="book-page__authors">
          {book.authors.map((author, index) => (
            <span className="book-page__author" key={index}>{author}</span>
          ))}
        </div>
        {Boolean(book.subTitle) && <div className="book-page__sub-title">{book.subTitle}</div>}
      </div>
    </div>
  );
};