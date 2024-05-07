import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WebApis from "./pages/WebApis";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/learnreact" element={<Home />} />
          <Route path="/learnreact/webapis" element={<WebApis />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
