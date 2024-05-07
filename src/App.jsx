import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WebApis from "./pages/WebApis";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/learnreact" element={<Home />} />
          <Route path="/learnreact/webapis" element={<WebApis />} />
          <Route path="/learnreact/menu" element={<Menu />} />
          <Route path="/learnreact/contact" element={<Contact />} />
          <Route path="/learnreact/*" element={<h1>Page not found!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
