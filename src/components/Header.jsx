import React, { useState } from "react";
import { Button } from "./UI/Button.jsx";
import { Input } from "./UI/Input.jsx";
import { Options } from "./Options.jsx";
import { Loader } from "./Loader.jsx"
import { Error } from "./Error.jsx";
import searchIcon from "../../public/assets/icons/search-svgrepo-com.svg";
import { loadBooks, setSearchValue } from "../slices/booksSlice.js";
import { useDispatch, useSelector } from "react-redux";


export const Header = ({ options }) => {

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    e.preventDefault();
    dispatch(setSearchValue(e.target.value));
    setInputValue(e.target.value);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    (inputValue) && dispatch(loadBooks(inputValue));
  };

  const searchValue = useSelector(state => state.booksSlice.searchValue);
  const clickHandler = (e) => {
    e.preventDefault();
    if (!searchValue) return;
    dispatch(loadBooks(searchValue));
  };

  const isError = useSelector((state) => state.booksSlice.isError);
  const isLoader = useSelector((state) => state.booksSlice.isLoading);
  const { category, sortType } = options;
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Books Search</h1>
          <Input
            handleInput={handleInput}
            handlerSubmit={handlerSubmit}
            inputValue={inputValue}
            clickHandler={clickHandler}
            styleBtn={'btn-search'}
          />
        <div className="header__container-options">
          <Options filterType={category} />
          <Options filterType={sortType} />
        </div>
      </div>
      {isError && <Error />}
      {isLoader && <Loader />}
    </header>
  );
};
