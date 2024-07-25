import styled from "styled-components";
import { colors } from "../styles/colors";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    /* 1440px */
    @media (max-width: 90em) {
      width: 40%;
    }

    /* 896px */
    @media (max-width: 56em) {
      width: 45%;
    }

    /* 704px */
    @media (max-width: 44em) {
      width: 50%;
    }

    /* 560px */
    @media (max-width: 35em) {
      display: none;
    }
  }
`;

export const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${colors.lightOrange};

  h3 {
    font-size: 4.8rem;
    font-weight: 400;
    line-height: 5.7rem;
    margin: 1.2rem 1.2rem 6rem;
    text-align: center;
  }
`;

export const SubHeader = styled.p`
  font-family: Inter;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.9rem;
  margin: 0;
  text-align: center;
  text-transform: uppercase;

  // 1440px
  @media (max-width: 90em) {
    margin-top: 3rem;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: flex-start;
  align-items: center;
  min-width: 22rem;
`;

export const Text = styled.p`
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 3.2rem;
  margin: 0;
  text-align: left;
`;

export const SubText = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.3rem;
  text-align: left;
`;
