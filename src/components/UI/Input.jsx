import React, { useRef, useEffect } from "react";
import { Button } from "./Button.jsx";

export const Input = ({handleInput, handlerSubmit, inputValue, clickHandler, styleBtn}) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus(), []
  });

  return (
    <form className="form" onSubmit={handlerSubmit}>
      <input
        type="text"
        className="form__input"
        placeholder=""
        ref={inputRef}
        value={inputValue}
        onChange={handleInput}
      />
      <Button
        clickHandler={clickHandler}
        style={styleBtn}
      >
      </Button>
    </form>
  );
};

