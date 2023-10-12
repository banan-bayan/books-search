import React from "react";
import { Link } from "react-router-dom";

export const BookCardItem = ({ book }) => {
  return (
    <>
      <div key={book.id} className="book-card-item">
        <Link to={`/book/${book.id}`} className="book-card-item__link">
          <img className="book-card-item__img" src={book.linkImg} />
          <div className="book-card-item__category">{book.category}</div>
          <div className="book-card-item__title">{book.title}</div>
          <div className="book-card-item__authors">
          {book.authors.map((author, index) => (
            <span className="book-card-item__author" key={index}>{author}</span>
          ))}
        </div>
        </Link>
      </div>
    </>
  );
};
