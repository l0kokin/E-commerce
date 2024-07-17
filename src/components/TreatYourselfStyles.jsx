import styled from "styled-components";
import { colors } from "../colors";

export const TreatYourselfContainer = styled.div`
  margin: 16rem 2rem 12rem 2rem;

  h2 {
    font-size: 4.8rem;
    font-weight: 400;
    line-height: 5.7rem;
    text-align: center;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2.4rem;
`;

export const Card = styled.div`
  display: flex;
  gap: 3.2rem;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 2.2rem;
  margin-bottom: 12rem;

  p {
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.4rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;
