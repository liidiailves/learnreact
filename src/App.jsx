import "./App.css";
import { User } from './User.jsx';

function App() {
  const users = [
    { name: "Liidia", age: 25 },
    { name: "Jake", age: 26 },
    { name: "Jessica", age: 24 },
  ]

  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  return (
    <div className="App">
      { users.map((user, key) => {
        return <User key={key} name={user.name} age={user.age} />
      })}

      { planets.map((planet, key) => !planet.isGasPlanet && <h2> {planet.name } </h2>
      )}
    </div>
  );
}

export default App;