import { useContext, useEffect } from "react";
import { DiscoverContainer, Headline, Title } from "./DiscoverStyles";
import TreatYourself from "./TreatYourself";
import { ProductContext } from "../context/context";
import CategoryList from "./CategoryList";

function Discover() {
  const { categories } = useContext(ProductContext);

  useEffect(() => {
    console.log("Categories in Discover:", categories);
  }, [categories]);

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
