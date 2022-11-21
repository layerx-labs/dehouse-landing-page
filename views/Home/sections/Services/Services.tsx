import { Service } from "../../../../components/Service";
import { services } from "../../data";
import {
  ServicesWrapper,
  ServicesTitle,
  ServicesInner,
  ServicesSubtitle,
} from "./Services.styles";

const Services = () => (
  <ServicesWrapper height={60}>
    <ServicesTitle id="services">Services</ServicesTitle>
    <ServicesSubtitle>we've got you covered</ServicesSubtitle>
    <ServicesInner>
      {services.map((s) => (
        <Service key={s.label} {...s} />
      ))}
    </ServicesInner>
  </ServicesWrapper>
);

export { Services };
