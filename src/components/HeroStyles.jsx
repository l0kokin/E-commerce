import styled from "styled-components";
import { colors } from "../styles/colors";

export const HeroContainer = styled.div`
  display: flex;
  background-color: ${colors.lightYellow};
  padding: 6rem;
  position: relative;
  z-index: 1;

  img {
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;

    /* 1024px */
    @media (max-width: 64em) {
      opacity: 0.7;
    }
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1000;
  width: 50%;
  margin-bottom: 5rem;

  h1 {
    font-family: Noto Serif, Arial, Helvetica, sans-serif;
    font-size: 5rem;
    font-weight: 600;
    line-height: 7rem;
  }

  /* 560px */
  @media (max-width: 35em) {
    width: 70%;
  }
`;

export const ButtonBlack = styled.button`
  background-color: ${colors.black};
  color: ${colors.yellow};
  width: fit-content;
  padding: 1.2rem 4rem;
  margin-top: 4rem;
  border-radius: 8px;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.4rem;
  cursor: pointer;
`;
