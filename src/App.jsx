import "./App.css";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(0);
  const increaseAge = () => {
    setAge(age +1);
  };

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const [showText, setShowText] = useState(true);

  const [textColor, setTextColor] = useState("black");

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {age} 
      <button onClick={increaseAge}>Increase age</button>
      <br />
      <br />
      <input type="text" onChange={handleInputChange} />
      <br />
      {inputValue}
      <br />
      <br />
      <button onClick={() => {
        setShowText(!showText)
      }}>Show / Hide</button>
      {showText && <h2>HI, MY NAME IS LIIDIA</h2>}
      <br />
      <button onClick={() => {
        setTextColor (textColor === "black" ? "red" : "black");
      }}>Change color</button>
      <h2 style={{ color: textColor }}>HI, MY NAME IS LIIDIA</h2>
      <br />
      <button onClick={() => {
        setCount(count + 1);
      }}>Increase</button>
      <button onClick={() => {
        setCount(count - 1);
      }}>Decrease</button>
      <button onClick={() => {
        setCount(0);
      }}>Set to Zero</button>
      {count}
    </div>
  );
}

export default App;