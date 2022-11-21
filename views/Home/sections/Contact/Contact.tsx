import { Button } from "../../../../components/Button";
import { ContactTitle, ContactWrapper } from "./Contact.styles";

const Contact = () => (
  <ContactWrapper height={30}>
    <ContactTitle>Are you ready?</ContactTitle>
    <Button>
      <a href="https://www.workin.pro/general-6" target={"_blank"}>
        Get in touch!
      </a>
    </Button>
  </ContactWrapper>
);

export { Contact };
