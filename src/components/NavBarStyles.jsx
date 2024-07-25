import styled from "styled-components";
import { colors } from "../styles/colors";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: ${colors.grey};
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-height: 7rem;
`;

export const Logo = styled.p`
  font-size: 4.2rem;
  font-weight: 700;
  line-height: 51.2px;
`;

export const NavLink = styled(Link)`
  color: ${colors.black};
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-decoration: none;
  margin: 0 1rem;

  &:hover {
    box-shadow: inset 0 -2px 0 0 ${colors.black};
  }
`;

export const NavItem = styled(Link)`
  color: ${colors.black};
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-decoration: none;
  margin: 0 1rem;
`;
