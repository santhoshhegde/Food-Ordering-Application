import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(useState());
  return (
    <header>
      <img src="https://foodvilla.no/src/img/logo.png" />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
