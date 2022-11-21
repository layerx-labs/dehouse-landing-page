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
      <FontAwesomeIcon
        icon={icon}
        className="text-c2"
        style={{ fontSize: 50, marginBottom: "1rem" }}
      />
      <div>
        <ServiceLabel>{label}</ServiceLabel>
        <ServiceDescription>{description}</ServiceDescription>
      </div>
    </ServiceContent>
  </ServiceWrapper>
);

export { Service };
