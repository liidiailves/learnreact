import { useState } from 'react';
import Axios from 'axios';

const CatFact = () => {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }

  return (
    <div className="catFact">
      <button onClick={fetchCatFact}> Generate Cat Fact </button>
      <p>{catFact}</p>
    </div>
  );
};

export default CatFact;