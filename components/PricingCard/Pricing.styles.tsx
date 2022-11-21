import tw from "../tw";
import Image from "next/image";
const PricingContent = tw.div`p-5`;
const PricingBadge = tw.span`inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-c3 rounded p-2 text-c2-l`;

const PricingTitle = tw.div`flex justify-between items-center text-c4 dark:text-c2 font-bold text-2xl tracking-tight mb-2`;
const PricingImage = tw(Image)`rounded-t-lg h-[12rem] w-[18rem]`;
const PricingWrapper = tw.div`lightable light-hoverable m-4 bg-c2-l shadow-xl rounded-lg max-w-sm bg-opacity-40 backdrop-filter backdrop-blur-lg`;
export {
  PricingImage,
  PricingBadge,
  PricingTitle,
  PricingContent,
  PricingWrapper,
};
