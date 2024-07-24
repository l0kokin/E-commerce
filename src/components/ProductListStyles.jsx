import styled from "styled-components";

export const ProductsContainer = styled.div`
  margin: 10rem;
  display: ${({ isEmpty }) => (isEmpty ? "flex" : "grid")};
  grid-template-columns: repeat(5, 1fr);
  gap: 6rem 2rem;
  align-items: center;
`;
