import tw from "../tw";

const ServiceDescription = tw.p`text-center font-light`;
const ServiceLabel = tw.b`mt-4 font-bold`;
const ServiceIcon = tw.div`flex flex-col items-center max-h-40`;
const ServiceContent = tw.div`flex flex-col justify-between min-h-[8rem]`;
const ServiceWrapper = tw.div`m-4 text-center light-hoverable lightable flex flex-col justify-center relative overflow-hidden max-w-[18rem] basis-1/4 md-max:basis-1/3 md-max:text-sm p-6 bg-c2-l shadow-xl rounded-xl`;
export {
  ServiceDescription,
  ServiceLabel,
  ServiceIcon,
  ServiceContent,
  ServiceWrapper,
};
