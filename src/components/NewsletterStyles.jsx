import styled from "styled-components";
import BackgroundImg from "../images/newsletter.jpg";
import { colors } from "../colors";

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
    font-size: 48px;
    font-weight: 400;
    line-height: 57.6px;
    text-align: left;
    width: 50%;
    z-index: 1000;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
`;

export const Headline = styled.h2`
  font-family: "Value Serif Pro", serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 57.6px;
  text-align: left;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.4rem;
  letter-spacing: 0.01em;
  width: 40%;
  color: ${colors.lightText};
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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
