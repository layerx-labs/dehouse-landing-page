import Image from "next/image";
import Section from "@/ui/section";
import Panel from "@/ui/panel";
import Ellipse from "../../../public/ellipse-02.png";
import styles from "./styles.module.css";
import { LocationsProps } from "./types";
import Icon from "../ui/icons";

export default function Locations(props: LocationsProps) {
  const { locations } = props;

  if (!locations) return <></>;

  return (
    <Section id="locations" title="Locations">
      <Image
        className={`ellipse ${styles.ellipseLocations}`}
        src={Ellipse}
        quality={10}
        alt=""
        placeholder="blur"
      />
      <div className={styles.locations}>
        {locations.map((location, index) => (
          <Panel
            key={index}
            title={location.name}
            cover={location.cover}
            icons={location.amenities}
            buttonUrl={
              process.env.AVAILABILITY_FORM_URL ??
              "https://docs.google.com/forms/d/e/1FAIpQLSdWHT8HksOtO54IHY8k29c9Jltnafdc0PhHtxkG8XDyzMicJg/viewform"
            }
            buttonLabel="Check availability"
          >
            <span>{location.city}</span>
            <p>{location.description}</p>
          </Panel>
        ))}
      </div>
    </Section>
  );
}
