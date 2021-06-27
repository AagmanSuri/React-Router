import "./Nav.css";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="Nav">
        <Link to="/">
          <h3 className="NavLinks">Logo</h3>
        </Link>
        <Link className="NavLinks" to="/Shop">
          <li>Shop</li>
        </Link>
        <Link className="NavLinks" to="/About">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
};
export default Nav;
