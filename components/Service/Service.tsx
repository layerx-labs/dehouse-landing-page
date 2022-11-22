import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  ServiceContent,
  ServiceDescription,
  ServiceIcon,
  ServiceLabel,
  ServiceWrapper,
} from "./Service.styles";

export interface ServiceProps {
  icon: IconProp;
  label: string;
  description: string;
}

const Service = ({ icon, label, description }: ServiceProps) => (
  <ServiceWrapper>
    <ServiceContent>
      <ServiceIcon>
        <FontAwesomeIcon
          icon={icon}
          className="text-c2"
          style={{ fontSize: 50 }}
        />
      </ServiceIcon>
      <ServiceLabel>{label}</ServiceLabel>
      <ServiceDescription>{description}</ServiceDescription>
    </ServiceContent>
  </ServiceWrapper>
);

export { Service };
