import { useState } from 'react';
import Axios from 'axios';

const NameAge = () => {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`)
      .then((res) => {
        setPredictedAge(res.data);
    });
  };

  return (
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
  );
};

export default NameAge;