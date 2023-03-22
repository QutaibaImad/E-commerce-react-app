import { Link } from "react-router-dom"

const Navbar = ({ toggle, setToggle }) => {
  return (
    <nav style={{ right: toggle && "0" }} className="navbar">
      <div className="navbar-close-icon">
        <i onClick={() => setToggle(false)} className="bi bi-x-lg"></i>
      </div>
      <ul className="navbar-links">
        <Link to="/" onClick={() => setToggle(false)} className="navbar-link">
          HomePage
        </Link>
        <Link to="/products" onClick={() => setToggle(false)} className="navbar-link">
          Electronics and mobiles
        </Link>
        <li onClick={() => setToggle(false)} className="navbar-link">
          Kitchen tools
        </li>
        <li onClick={() => setToggle(false)} className="navbar-link">
          Males
        </li>
        <li onClick={() => setToggle(false)} className="navbar-link">
          Female
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
