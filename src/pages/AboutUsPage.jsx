import AboutUs from "../components/AboutUs";
import { AboutPageContainer } from "../components/AboutUsStyles";
import TreatYourself from "../components/TreatYourself";

function AboutUsPage() {
  return (
    <AboutPageContainer>
      <AboutUs />
      <TreatYourself />
    </AboutPageContainer>
  );
}

export default AboutUsPage;
