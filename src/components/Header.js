import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header className="flex justify-between">
      <img src="https://foodvilla.no/src/img/logo.png" className="h-14" />
      <nav>
        <ul className="flex">
          <li className="p-3">
            <Link to="/">Home</Link>
          </li>

          <li className="p-3">
            <NavLink to="about">About</NavLink>
          </li>
          <li className="p-3">
            <Link to="contact">Contact</Link>
          </li>
          <li className="p-3">
            <Link to="instamart">Instamart</Link>
          </li>
          <li className="p-3">Cart</li>
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
