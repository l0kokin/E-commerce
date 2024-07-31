import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Logo,
  NavItem,
  BurgerMenu,
  Menu,
  Close,
} from "./NavBarStyles";
import { ReactComponent as BurgerIcon } from "../icons/burger.svg";
import { ReactComponent as CloseIcon } from "../icons/close.svg";

function Navbar() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  const toggleMenu = () => {
    setOpenBurgerMenu(!openBurgerMenu);
  };

  return (
    <>
      <Nav>
        <NavItem to="/">
          <Logo>SoCo</Logo>
          <BurgerMenu onClick={toggleMenu}>
            <BurgerIcon />
          </BurgerMenu>
        </NavItem>
        <Menu open={openBurgerMenu}>
          <Close onClick={toggleMenu}>
            <CloseIcon />
          </Close>
          <NavLink to="/" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/products" onClick={toggleMenu}>
            Products
          </NavLink>
          <NavLink to="/cart" onClick={toggleMenu}>
            Cart
          </NavLink>
          <NavLink to="/about" onClick={toggleMenu}>
            About us
          </NavLink>
          <NavLink to="/subscribe" onClick={toggleMenu}>
            Subscribe
          </NavLink>
        </Menu>
      </Nav>
    </>
  );
}

export default Navbar;
