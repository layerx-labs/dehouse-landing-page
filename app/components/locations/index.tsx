import Image from "next/image";
import Section from "@/ui/section";
import ButtonLink from "../ui/button-link";
import styles from "./styles.module.css";
import { LocationsProps } from "./types";

export default function Locations(props: LocationsProps) {
  const { locations } = props;

  return (
    <Section title="Locations">
      <div className={`ellipse ${styles.ellipseLocations}`} />
      <div className={styles.locations}>
        {locations.map((location, index) => (
          <div key={index}>
            <div className={styles.cover}>
              <Image
                width={location.cover.width}
                height={location.cover.height}
                src={location.cover.url}
                alt={location.name}
              />
            </div>
            <div className={styles.details}>
              <h3>By {location.name}</h3>
              <span>{location.city}</span>
              <p>{location.description}</p>
            </div>
            <ButtonLink url="#0" label="Check availability" icon="arrowRight" />
          </div>
        ))}
      </div>
    </Section>
  );
}
