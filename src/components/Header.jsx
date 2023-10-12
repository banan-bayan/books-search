import React from "react";
import { useSelector } from "react-redux";
import { ButtonSearch } from "./UI/ButtonSearch.jsx";
import { Input } from "./UI/Input.jsx";
import { Options } from "./Options.jsx";
import { Loader } from "./Loader.jsx"
import { Error } from "./Error.jsx";

export const Header = ({ options }) => {
  const isError = useSelector((state) => state.booksSlice.isError);
  const isLoader = useSelector((state) => state.booksSlice.isLoading);
  const { category, sortType } = options;
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Books Search</h1>
        <Input>
          <ButtonSearch />
        </Input>
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
