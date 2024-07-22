import styled from "styled-components";
import { colors } from "../colors";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  padding: 1rem 2rem;
  border: 2px solid ${colors.grey};
  border-radius: 16px;
  background-color: ${colors.white};
  padding: 0 3.8rem 3.8rem;

  h3 {
    font-family: Poppins, "Courier New", Courier, monospace;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 3.2rem;
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 0;
    white-space: nowrap;
  }

  img {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    object-fit: cover;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1rem;
    margin-bottom: 2rem;
  }

  span {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1rem;
    margin-top: 2.5rem;
  }
`;

export const trimString = (str, wordLimit) => {
  const words = str.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return str;
};
