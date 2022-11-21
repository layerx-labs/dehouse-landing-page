import tw from "../../../../components/tw";
import { BackgroundWrapper, Title } from "../../Home.styles";

const ContactTitle = tw(Title)`contact-title`;

const ContactWrapperStyled = tw(BackgroundWrapper)`bg-c2-l`;

const ContactWrapper = tw(
  ContactWrapperStyled
)`empty flex flex-col justify-center items-center`;

export { ContactWrapper, ContactTitle };
