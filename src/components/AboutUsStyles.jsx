import styled from "styled-components";

export const AboutContainer = styled.div`
  h1 {
    font-size: 4rem;
    font-weight: 500;
    line-height: 4rem;
    text-align: center;
    margin: 12rem 0rem 4rem;
  }

  p {
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.4rem;
    padding: 2rem 5rem;
  }

  img {
    width: 50%;
    border-radius: 16px;

    /* 992px */
    @media (max-width: 62em) {
      width: 40%;
    }

    /* 704px */
    @media (max-width: 44em) {
      width: 80%;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;

  /* 704px */
  @media (max-width: 44em) {
    flex-direction: column;
    &.reverse {
      flex-direction: column-reverse;
    }
  }
`;

export const AboutPageContainer = styled.div`
  margin: 0rem 10rem 10rem 10rem;

  /* 704px */
  @media (max-width: 44em) {
    margin: 0rem 5rem 5rem 5rem;
  }
`;
