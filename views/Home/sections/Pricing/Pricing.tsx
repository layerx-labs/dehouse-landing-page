import { packages } from "../../data";
import { PricingCard } from "../../../../components/PricingCard";
import {
  PricingWrapper,
  PricingTitle,
  PricingInner,
  PricingDaily,
  PricingSubtitle,
} from "./Pricing.styles";

const Pricing = () => (
  <PricingWrapper height={60}>
    <PricingTitle id="packs">Packs</PricingTitle>
    <PricingSubtitle>prices for every wallet!</PricingSubtitle>
    <PricingInner>
      {packages.map((p) => (
        <PricingCard key={p.assetName} {...p} />
      ))}
    </PricingInner>
    <PricingDaily>Daily Pass 10,00€</PricingDaily>
  </PricingWrapper>
);

export { Pricing };
