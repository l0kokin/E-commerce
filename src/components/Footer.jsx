import {
  FooterContainer,
  FooterText,
  SocialMediaContainer,
  Text,
  SubText,
  SubHeader,
} from "./FooterStyles";
import FooterImg from "../images/footer.jpg";
import { ReactComponent as Instagram } from "../icons/instagram.svg";
import { ReactComponent as Tiktok } from "../icons/tiktok.svg";
import { ReactComponent as Twitter } from "../icons/twitter.svg";

function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        <SubHeader>Follow us</SubHeader>
        <h3>Meet Our Community</h3>
        <SocialMedia key={1} Icon={Instagram} text={"Instagram"} />
        <SocialMedia key={2} Icon={Tiktok} text={"Tiktok"} />
        <SocialMedia key={3} Icon={Twitter} text={"Twitter"} />
        <SubText>&copy; 2024 Brand, Inc. All rights reserved. </SubText>
      </FooterText>
      <img src={FooterImg} alt="clothers laid out" />
    </FooterContainer>
  );
}

function SocialMedia({ Icon, text }) {
  return (
    <SocialMediaContainer>
      <Icon />
      <div>
        <Text>{text}</Text>
        <SubText>@Soco</SubText>
      </div>
    </SocialMediaContainer>
  );
}

export default Footer;
