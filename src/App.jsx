import "./App.css";

function App() {
  return (
    <div className="App">
      <User name="Liidia" age={25} email="liidia@example.com" />
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <User name="Jessica" age={24} email="jessica@example.com" />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <User name="Jake" age={26} email="jake@example.com" />
      <Job salary={10000} position="Project Manager" company="Netflix" />
    </div>
  );
}

// component must start with capital letter
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
    </div>
  );
};

const Job = (props) => {
  return (
    <div>
      <h3>{props.salary}</h3>
      <h3>{props.position}</h3>
      <h3>{props.company}</h3>
    </div>
  );
};

export default App;