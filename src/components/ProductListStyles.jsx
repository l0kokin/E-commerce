import styled from "styled-components";

export const ProductsContainer = styled.div`
  margin: 10rem;
  display: ${({ isEmpty }) => (isEmpty ? "flex" : "grid")};
  grid-template-columns: repeat(5, 1fr);
  gap: 6rem 2rem;
  align-items: center;

  // 1680px
  @media (max-width: 105em) {
    grid-template-columns: repeat(4, 1fr);
  }

  // 1136px
  @media (max-width: 71em) {
    grid-template-columns: repeat(3, 1fr);
  }

  // 800px
  @media (max-width: 50em) {
    grid-template-columns: repeat(2, 1fr);
  }

  // 448px
  @media (max-width: 28em) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6rem;
  }
`;
