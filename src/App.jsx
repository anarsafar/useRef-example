import { useState, useRef } from "react";
import "./App.css";
import Input from "./Input";

function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <Input ref={inputRef} value="tahir" />
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default App;
