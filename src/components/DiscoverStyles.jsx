import styled from "styled-components";
import { colors } from "../colors";

export const DiscoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 12rem 0;
  padding: 0 4rem;
  background: ${colors.lightBlue};
  background: linear-gradient(${colors.lightBlue}, ${colors.lightYellow});
`;

export const Headline = styled.p`
  font-family: Inter;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  font-family: Value Serif Pro;
  font-size: 4.8rem;
  font-weight: 400;
  line-height: 4.7rem;
  text-align: center;
`;
