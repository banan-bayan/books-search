import React from "react";
import { Header } from "./components/Header.jsx";
import { options } from "./constants.js";
// import { Switches } from "./components/Switches.jsx";
import { Route, Routes } from "react-router-dom";
import { BookCardList } from "./components/BookCardList.jsx";
import { BookPage } from "./components/BookPage.jsx";


export const App = () => {

  return (
    <div className="app">
      <Header options={options} />
      <Routes>
        <Route path="/" element={<BookCardList />}/>
        <Route path="/book/:bookId" element={<BookPage />}/>
        <Route path="*" element={<h1>Page not fount</h1>}/>
      </Routes>
      {/* <Switches /> */}
    </div>
  );
};
