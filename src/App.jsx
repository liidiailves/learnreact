import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }

  useEffect(() => {
    fetchCatFact();
  }, []);

  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`)
      .then((res) => {
        setPredictedAge(res.data);
    });
  };

  return (
    <div className="App">
      <div className="catFact">
      <button onClick={fetchCatFact}> Generate Cat Fact </button>
      <p>{catFact}</p>
      </div>

      <div className="nameAge">
        <input 
          placeholder="Submit your name"
          onChange={(event) => {
            setName(event.target.value);
          }} />
        <button onClick={fetchData}>Predict Age</button>
        <p>Name: {predictedAge?.name}</p>
        <p>Predicted Age: {predictedAge?.age}</p>
        <p>Count: {predictedAge?.count}</p>
      </div>
      
    </div>
  );
}

export default App;