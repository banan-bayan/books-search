import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./CSS.css";
import store from "./slices/index.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
 </React.StrictMode>
);
