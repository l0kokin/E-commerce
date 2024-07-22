import { NewsletterContainer } from "./NewsletterStyles";
import { ButtonYellow } from "./CategoryListStyles";
import { Link } from "react-router-dom";

function Newsletter() {
  return (
    <NewsletterContainer>
      <h2>
        Sign up for our newsletter and be the first to know about our exclusive
        offers.
      </h2>
      <Link to={"/subscribe"}>
        <ButtonYellow>Sign up - it's free</ButtonYellow>
      </Link>
    </NewsletterContainer>
  );
}

export default Newsletter;

//   <h2>
//     📬 Welcome aboard! Your inbox is about to get a whole lot more exciting.
//   </h2>;
