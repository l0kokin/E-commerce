import styled from "styled-components";
import { colors } from "../styles/colors";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: ${colors.grey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8rem 0 5rem;

  /* 600px */
  @media (max-width: 37.5em) {
    flex-direction: column;
    max-height: none;
  }
`;

export const Logo = styled.p`
  font-size: 4.2rem;
  font-weight: 700;
  line-height: 5.1rem;
`;

export const Menu = styled.div`
  display: flex;
  gap: 7rem;

  /* 752px */
  @media (max-width: 47em) {
    gap: 5rem;
  }

  /* 600px */
  @media (max-width: 37.5em) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.grey};
    z-index: 1000;
  }
`;

export const NavLink = styled(Link)`
  color: ${colors.black};
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.4rem;
  letter-spacing: 0.5px;
  text-decoration: none;
  margin: 0 1rem;
  white-space: nowrap;

  text &:hover {
    box-shadow: inset 0 -2px 0 0 ${colors.black};
  }

  /* 600px */
  @media (max-width: 37.5em) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    margin-top: 4rem;

    &:nth-child(2) {
      margin-top: 20rem;
    }

    &:hover {
      box-shadow: none;
    }
  }
`;

export const NavItem = styled(Link)`
  color: ${colors.black};
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.4rem;
  letter-spacing: 0.5px;
  text-decoration: none;
  margin: 0 1rem;

  /* 600px */
  @media (max-width: 37.5em) {
    display: flex;
    align-items: center;
    gap: 10rem;
  }
`;

export const BurgerMenu = styled.div`
  display: none;

  /* 600px */
  @media (max-width: 37.5em) {
    display: flex;
  }
`;

export const Close = styled.div`
  display: none;

  /* 600px */
  @media (max-width: 37.5em) {
    display: flex;
    position: absolute;
    top: 3rem;
    right: 3rem;
  }
`;
