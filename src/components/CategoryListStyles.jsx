import styled from "styled-components";
import { colors } from "../colors";

export const Categories = styled.div`
  display: flex;
  gap: 2.4rem;
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  background-color: ${colors.white};
  padding: 0 3.8rem 3.8rem;

  p {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.2rem;
    text-transform: capitalize;
    font-family: Value Serif;
    text-align: center;
  }

  img {
    border-radius: 50%;
    width: 24rem;
  }
`;

export const ButtonYellow = styled.button`
  background-color: ${colors.yellow};
  border: 1px solid ${colors.black};
  border-radius: 8px;
  width: fit-content;
  margin-top: 5rem;
  padding: 0.8rem 5.3rem;
  cursor: pointer;
`;
