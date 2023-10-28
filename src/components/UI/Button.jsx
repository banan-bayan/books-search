import React from "react";

export const Button = ({clickHandler, style, children}) => {
  return (
      <button onClick={clickHandler} className={`btn ${style}`}>
        {children}
      </button>
  );
};
