import { DiscoverContainer, Headline, Title } from "./DiscoverStyles";
import TreatYourself from "./TreatYourself";
import CategoryList from "./CategoryList";

function Discover() {
  return (
    <DiscoverContainer>
      <Headline>#designed for everybody</Headline>
      <Title>Discover the perfect match for your needs.</Title>
      <CategoryList />
      <TreatYourself />
    </DiscoverContainer>
  );
}

export default Discover;
