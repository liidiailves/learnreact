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

  const [generatedExcuse, setGeneratedExcuse] = useState("");

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        setGeneratedExcuse(res.data[0].excuse);
      }
    );
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
      <div className="excuse">
      <h3> Generate An Excuse </h3>
      <button onClick={() => fetchExcuse("party")}> Party</button>
      <button onClick={() => fetchExcuse("family")}> Family</button>
      <button onClick={() => fetchExcuse("office")}> Office </button>
      <button onClick={() => fetchExcuse("developers")}> Developers </button>
      <p> {generatedExcuse} </p>
    </div>
    </div>
  );
}

export default App;