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

  h3 {
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
  white-space: nowrap;
  margin-top: 4.2rem;
  padding: 0.8rem 5.3rem;
  box-shadow: 5px 5px 0 ${colors.white}, 6px 6px 0 ${colors.black};
  transition: transform 0.1s ease, box-shadow 0.1s ease;
  cursor: pointer;

  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0 ${colors.white}, 4px 4px 0 ${colors.black};
  }
`;
