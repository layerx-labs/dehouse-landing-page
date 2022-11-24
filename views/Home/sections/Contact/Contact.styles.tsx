import tw from "../../../../components/tw";
import { BackgroundWrapper, Title } from "../../Home.styles";

const ContactInner = tw.div`contact-inner flex flex-col justify-center items-center m-2`;
const ContactTitle = tw(Title)`contact-title`;

const ContactWrapperStyled = tw(BackgroundWrapper)`bg-c2-l`;

const ContactWrapper = tw(
  ContactWrapperStyled
)`contact flex flex-col justify-center items-center`;

export { ContactWrapper, ContactInner, ContactTitle };
