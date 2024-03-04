import { useState } from 'react';
import Axios from 'axios';

const Excuse = () => {
  const [generatedExcuse, setGeneratedExcuse] = useState("");

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        setGeneratedExcuse(res.data[0].excuse);
      }
    );
  };

  return (
    <div className="excuse">
      <h3> Generate An Excuse </h3>
      <button onClick={() => fetchExcuse("party")}> Party</button>
      <button onClick={() => fetchExcuse("family")}> Family</button>
      <button onClick={() => fetchExcuse("office")}> Office </button>
      <button onClick={() => fetchExcuse("developers")}> Developers </button>
      <p> {generatedExcuse} </p>
    </div>
  );
};

export default Excuse;