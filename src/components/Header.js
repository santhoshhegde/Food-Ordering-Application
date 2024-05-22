import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header>
      <img src="https://foodvilla.no/src/img/logo.png" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="instamart">Instamart</Link>
          </li>
          <li>Cart</li>
        </ul>
      </nav>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
      )}
    </header>
  );
};

export default Header;
