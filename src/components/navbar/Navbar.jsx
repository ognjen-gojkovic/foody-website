import React from "react";
import { FaBars, FaTimes, FaUtensils } from "react-icons/fa";
import { NavbarStyled } from "./Navbar.Styled";

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <NavbarStyled toggle={toggle}>
      <div className="logo">
        <a href="#home">
          <i>
            <FaUtensils />
          </i>
          Foody
        </a>
      </div>
      <div onClick={handleToggle} id="menu__bars">
        {toggle ? <FaTimes /> : <FaBars />}
      </div>
      <nav className="nav">
        <div className="links">
          <a href="#home" className="link" onClick={() => setToggle(false)}>
            Home
          </a>
          <a
            href="#speciality"
            className="link"
            onClick={() => setToggle(false)}
          >
            Speciality
          </a>
          <a href="#popular" className="link" onClick={() => setToggle(false)}>
            Popular
          </a>
          <a href="#gallery" className="link" onClick={() => setToggle(false)}>
            Gallery
          </a>
          <a href="#review" className="link" onClick={() => setToggle(false)}>
            Review
          </a>
          <a href="#order" className="link" onClick={() => setToggle(false)}>
            Order
          </a>
        </div>
      </nav>
    </NavbarStyled>
  );
};

export default Navbar;
