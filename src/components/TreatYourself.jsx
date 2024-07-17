import {
  Card,
  Cards,
  IconContainer,
  TreatYourselfContainer,
} from "./TreatYourselfStyles";
import { ReactComponent as EcoFriendly } from "../icons/eco-friendly.svg";
import { ReactComponent as Quality } from "../icons/quality.svg";
import { ReactComponent as Comfort } from "../icons/soft.svg";
import { ReactComponent as Innovative } from "../icons/innovative.svg";
import { ReactComponent as Charity } from "../icons/charily.svg";

function TreatYourself() {
  return (
    <TreatYourselfContainer>
      <h2>Treat yourself, because you deserve it.</h2>
      <Cards>
        <CategoryCard
          key={1}
          Icon={EcoFriendly}
          text={
            "Made with sustainable materials that are kind to the Earth. Wear your values."
          }
        />
        <CategoryCard
          key={2}
          Icon={Quality}
          text={
            "Built to last, our clothes withstand the test of time and trends"
          }
        />
        <CategoryCard
          key={3}
          Icon={Comfort}
          text={
            "Designed for comfort, crafted for style. Look good, feel great."
          }
        />
        <CategoryCard
          key={4}
          Icon={Innovative}
          text={
            "Unique and trendy designs that make you stand out in any crowd."
          }
        />
        <CategoryCard
          key={5}
          Icon={Charity}
          text={
            "A portion of every purchase supports local artisans and communities."
          }
        />
      </Cards>
    </TreatYourselfContainer>
  );
}

function CategoryCard({ Icon, text }) {
  return (
    <Card>
      <IconContainer>
        <Icon />
      </IconContainer>
      <p>{text}</p>
    </Card>
  );
}

export default TreatYourself;
