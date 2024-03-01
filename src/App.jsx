import "./App.css";

function App() {
  const age = 17;
  const isGreen = true;

  return (
    <div className="App">
      {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
      <h2 style={{ color: isGreen ? "green" : "red" }}>THIS HAS COLOR</h2>

      { isGreen && <button>THIS IS A BUTTON</button> }
    </div>
  );
}

export default App;