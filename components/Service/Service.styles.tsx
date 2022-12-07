import tw from "../tw";

const ServiceDescription = tw.p`flex flex-col flex-1 justify-center items-center justify-items-center text-center font-light`;
const ServiceLabel = tw.b`mt-4 font-bold`;
const ServiceIcon = tw.div`flex flex-col justify-center min-h-[4rem]`;
const ServiceContent = tw.div`flex flex-col justify-start min-h-full`;
const ServiceWrapper = tw.div`sm-max:m-2 sm-max:text-xs m-4 text-center light-hoverable lightable flex flex-col justify-center relative overflow-hidden max-w-[18rem] basis-1/4 md-max:basis-1/3 md-max:text-sm p-6 bg-c2-l shadow-xl rounded-xl`;
export {
  ServiceDescription,
  ServiceLabel,
  ServiceIcon,
  ServiceContent,
  ServiceWrapper,
};
