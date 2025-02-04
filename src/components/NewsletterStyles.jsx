import styled from "styled-components";
import BackgroundImg from "../images/newsletter.jpg";
import { colors } from "../styles/colors";

export const NewsletterContainer = styled.div`
  position: relative;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 75rem;
  margin: 6rem 6rem 10rem 6rem;
  border-radius: 16px;
  padding: 8rem 6rem;

  h2 {
    font-family: Value Serif Pro;
    font-size: 4.8rem;
    font-weight: 400;
    line-height: 4.6rem;
    text-align: left;
    width: 50%;
    z-index: 1000;

    /* 896px */
    @media (max-width: 56em) {
      width: 90%;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
`;

export const Headline = styled.h2`
  font-family: "Value Serif Pro", serif;
  font-size: 4.8rem;
  font-weight: 400;
  line-height: 5rem;
  text-align: left;
  margin-bottom: 2rem;
`;

export const Description = styled.p`
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.4rem;
  letter-spacing: 0.01em;
  width: 50%;
  color: ${colors.lightText};

  /* 896px */
  @media (max-width: 56em) {
    width: 90%;
  }
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 3rem;
    /* margin-top: 15rem; */
    color: ${colors.black};
  }
`;

export const Input = styled.input`
  padding: 1.5rem;
  font-size: 1.5rem;
  margin-top: 5rem;
  border: 1px solid ${colors.black};
  border-radius: 8px;
  width: 100%;
  max-width: 40rem;
`;
