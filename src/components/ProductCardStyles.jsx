import styled from "styled-components";
import { colors } from "../colors";

export const Card = styled.div`
  width: 10rem;
  padding: 1rem 2rem;
  border: 2px solid ${colors.grey};
  border-radius: 16px;
  background-color: ${colors.lightPink};

  img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 2px solid ${colors.grey};
  }

  p {
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 0.9rem;
  }
`;

export const trimString = (str, wordLimit) => {
  const words = str.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return str;
};
