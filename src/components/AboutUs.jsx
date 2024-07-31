import { AboutContainer, Box } from "./AboutUsStyles";
import OwnerImg from "../images/owner.jpeg";
import ShopImg from "../images/shop.jpg";
import AboutImg from "../images/about.jpeg";

function AboutUs() {
  return (
    <AboutContainer>
      <h1 style={{ marginTop: "10rem" }}>About us</h1>
      <Box>
        <img src={AboutImg} alt="woman in a shop" />
        <p>
          Welcome to SoCo, your premier destination for top-quality electronics,
          exquisite jewelry, and stylish clothing. We pride ourselves on
          offering an exceptional range of products to suit all your needs and
          tastes. At SoCo, we are committed to providing an exceptional shopping
          experience.
        </p>
      </Box>
      <h1>History</h1>
      <Box className="reverse">
        <p>
          SoCo was founded by Emma Sterling, a visionary woman with a passion
          for excellence and a keen eye for quality. Starting with a small
          boutique in 2000, Emma Sterling aimed to create a space where
          customers could find unique and high-quality products. Her dedication,
          hard work, and commitment to providing exceptional customer service
          quickly set her business apart..
        </p>
        <img src={OwnerImg} alt="woman in a shop" />
      </Box>
      <h1>What we do</h1>
      <Box>
        <img src={ShopImg} alt="woman in a shop" />
        <p>
          At SoCo, we specialize in offering a curated selection of the latest
          electronics, stunning jewelry pieces, and fashionable clothing. Our
          range includes everything from state-of-the-art gadgets and tech
          accessories to timeless jewelry and trendy apparel. We are dedicated
          to bringing you the best products from renowned brands and talented
          artisans.
        </p>
      </Box>
    </AboutContainer>
  );
}

export default AboutUs;
