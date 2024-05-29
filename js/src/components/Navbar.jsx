import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <Link to="/learnreact" className="link">
        Home
      </Link>
      <Link to="/learnreact/profile" className="link">
        Profile
      </Link>
      <Link to="/learnreact/data" className="link">
        Data
      </Link>
      <Link to="/learnreact/webapis" className="link">
        WebApis
      </Link>
    </div>
  );
}
