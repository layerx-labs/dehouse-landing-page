import {
  PricingBadge,
  PricingContent,
  PricingImage,
  PricingTitle,
  PricingWrapper,
} from "./Pricing.styles";

export interface PricingCardProps {
  assetName: string;
  title: string;
  duration?: number;
  timespan: "Days" | "Month";
  price: number;
  dailyRate: number;
  deskType: "Flex" | "Fix";
}

const PricingCard = ({
  assetName,
  title,
  duration,
  price,
  timespan,
  dailyRate,
  deskType,
}: PricingCardProps) => {
  return (
    <PricingWrapper>
      <PricingImage
        width="200"
        height="100"
        src={assetName}
        alt={`pricing-${assetName}`}
      />
      <PricingContent>
        <PricingTitle>
          {title} <PricingBadge>{price}€</PricingBadge>
        </PricingTitle>
        <div className="mb-3 flex flex-col justify-center">
          <div className="flex font-semibold justify-between">
            <p>
              {duration} {timespan}
            </p>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold">Per day: {dailyRate}€</div>
            <p className="font-light">{deskType} desk</p>
          </div>
        </div>
      </PricingContent>
    </PricingWrapper>
  );
};

export { PricingCard };
