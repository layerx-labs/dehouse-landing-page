import { Button } from "../../../../components/Button";
import { ContactInner, ContactTitle, ContactWrapper } from "./Contact.styles";

const Contact = () => (
  <ContactWrapper height={30}>
    <ContactTitle>Are you ready?</ContactTitle>
    <Button>
      <a href="https://www.workin.pro/general-6" target={"_blank"}>
        Get in touch!
      </a>
    </Button>
    <ContactInner>
      <br />
      <span>or find us at</span>
      <br />
      <address> Via do Castelo do Queijo, 395 4100-429 Porto</address>
    </ContactInner>
  </ContactWrapper>
);

export { Contact };
