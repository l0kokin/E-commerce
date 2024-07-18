import { ButtonYellow } from "../components/CategoryListStyles";
import {
  NewsletterContainer,
  Content,
  Headline,
  Description,
  SignupForm,
  Input,
} from "../components/NewsletterStyles";

function SubscribePage() {
  return (
    <NewsletterContainer>
      <Content>
        <Headline>Stay Updated with the Latest Trends!</Headline>
        <Description>
          Sign up for our newsletter and be the first to know about new
          arrivals, exclusive offers, and the latest fashion trends. Join our
          community of fashion enthusiasts and get 10% off your first purchase!
        </Description>
        <SignupForm>
          <Input type="email" placeholder="Enter your email" required />
          <ButtonYellow type="submit">Sign Up</ButtonYellow>
        </SignupForm>
      </Content>
    </NewsletterContainer>
  );
}

export default SubscribePage;
