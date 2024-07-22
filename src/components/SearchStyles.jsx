import styled from "styled-components";
import { colors } from "../colors";

export const Button = styled.button`
  border: none;
  background-color: inherit;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem;
`;

export const SearchInput = styled.input`
  border-radius: 16px;
  border: 1px solid grey;
  padding: 1rem 1.5rem 1rem 1rem;
  background-color: ${colors.white};
`;
