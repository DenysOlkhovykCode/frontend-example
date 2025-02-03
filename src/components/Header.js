import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExample, logExample } from "../store/ExampleSlice";

function Header() {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addExample({ value }));
    setValue(value + 1);
  };
  const log = () => {
    dispatch(logExample());
  };
  return (
    <header className="header">
      <button className="btn" onClick={() => addTask()}>
        Додати
      </button>
      <button className="btn" onClick={() => log()}>
        Логування
      </button>
    </header>
  );
}

export default Header;
