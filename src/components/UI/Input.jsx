import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadBooks, setSearchValue } from "../../slices/booksSlice";

export const Input = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);


  const dispatch = useDispatch();

  const handleInput = (e) => {
    e.preventDefault();
    dispatch(setSearchValue(e.target.value));
    setInputValue(e.target.value);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      dispatch(loadBooks(inputValue));
    }
  };

  return (
    <form className="input" onSubmit={handlerSubmit}>
      <input
        type="text"
        className="input__input"
        placeholder=""
        value={inputValue}
        onChange={handleInput}
        ref={inputRef}
      />
      {children}
    </form>
  );
};
