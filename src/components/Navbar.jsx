import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <Link to="/learnreact" className="link">
        Home
      </Link>
      <Link to="/learnreact/menu" className="link">
        Menu
      </Link>
      <Link to="/learnreact/Contact" className="link">
        Contact
      </Link>
      <Link to="/learnreact/webapis" className="link">
        WebApis
      </Link>
    </div>
  );
}
