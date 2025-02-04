import { Link } from "react-router-dom";
import HeroImg from "../images/hero.webp";
import { ButtonBlack, HeroContainer, HeroText } from "./HeroStyles";

function Hero() {
  return (
    <HeroContainer>
      <HeroText>
        <h1>
          Find Your Unique Style: Embrace Your Individuality with Our Unique
          Collections.
        </h1>
        <Link to={"../about"}>
          <ButtonBlack>Find out more about us</ButtonBlack>
        </Link>
      </HeroText>
      <img src={HeroImg} alt="child hugging woman, a pill bottle" />
    </HeroContainer>
  );
}

export default Hero;
