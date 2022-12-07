import {
  faAirFreshener,
  faClock,
  faCouch,
  faDoorOpen,
  faGlassWaterDroplet,
  faGlobe,
  faSoap,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import { PricingCardProps } from "../../../components/PricingCard";
import { ServiceProps } from "../../../components/Service";

const packages: PricingCardProps[] = [
  {
    assetName: "/assets/packs/doge.webp",
    title: "Doge",
    dailyRate: 8,
    price: 40,
    duration: 5,
    deskType: "Flex",
    timespan: "Days",
  },
  {
    assetName: "/assets/packs/vitalik.webp",
    title: "Vitalik",
    dailyRate: 6.5,
    price: 100,
    duration: 15,
    deskType: "Flex",
    timespan: "Days",
  },
  {
    assetName: "/assets/packs/satoshi.webp",
    title: "Satoshi",
    dailyRate: 5.5,
    price: 160,
    duration: 1,
    deskType: "Fix",
    timespan: "Month",
  },
];

const services: ServiceProps[] = [
  {
    description: "on site assistance",
    label: "Personalized Service",
    icon: faUserGear,
  },
  {
    description: "adapted to all needs",
    label: "Space + Furniture",
    icon: faCouch,
  },
  {
    description: "always neat and tidy!",
    label: "Cleaning Service",
    icon: faSoap,
  },
  {
    description: "so you can build web3",
    label: "Internet",
    icon: faGlobe,
  },
  {
    description: "water and light",
    label: "Expenses Included",
    icon: faGlassWaterDroplet,
  },
  {
    description: "time extension possibility",
    label: "Access 7am - 23pm",
    icon: faClock,
  },
  {
    description: "to all common areas",
    label: "Global Access",
    icon: faDoorOpen,
  },
  {
    description: "to keep you fresh",
    label: "Air Conditioning",
    icon: faAirFreshener,
  },
];

const sliderPhotos: { url: string; key: number }[] = [
  { url: "/assets/slider/1.webp", key: 1 },
  { url: "/assets/slider/2.webp", key: 2 },
  { url: "/assets/slider/3.webp", key: 3 },
  { url: "/assets/slider/4.webp", key: 4 },
  { url: "/assets/slider/5.webp", key: 5 },
];

export { services, sliderPhotos, packages };
