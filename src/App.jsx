import React from "react";
import { Header } from "./components/Header.jsx";
import { BookCardList } from "./components/BookCardList.jsx";
import { BookPage } from "./components/BookPage.jsx";
import { options } from "./constants.js";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div className="app">
      <Header options={options} />
      <Routes>
        <Route path="/" element={<BookCardList />}/>
        <Route path="/book/:bookId" element={<BookPage />}/>
      </Routes>
    </div>
  );
};
