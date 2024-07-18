import React from "react";
import { Nav, NavLink, Logo, NavItem } from "./NavBarStyles";
import { ReactComponent as SearchIcon } from "../icons/search.svg";

function Navbar() {
  return (
    <Nav>
      <NavItem to="/">
        <Logo>SoCo</Logo>
      </NavItem>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavItem to="/products">
        <SearchIcon />
      </NavItem>
    </Nav>
  );
}

export default Navbar;
