import React from "react";
import { Route, Routes } from "react-router-dom";
import { BookCardList } from "./BookCardList.jsx";
import { BookPage } from "./BookPage.jsx";

export const Switches = () => {
  <Routes>
    <Route path="/" element={<BookCardList />}/>
    <Route path="/book/:bookId" element={<BookPage />}/>
    <Route path="*" element={<h1>Page not fount</h1>}/>
  </Routes>
}