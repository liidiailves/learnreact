import React from "react";
import "./App.css";
import Person, { Country } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Liidia"
        email="liidia@example.com"
        age={45}
        isMarried={true}
        friends={["jake", "jessica", "jerry"]}
        country={Country.Estonia}
      />
    </div>
  );
}

export default App;
