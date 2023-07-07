import Section from "@/ui/section";
import Panel from "@/ui/panel";
import styles from "./styles.module.css";
import { LocationsProps } from "./types";

export default function Locations(props: LocationsProps) {
  const { locations } = props;

  return (
    <Section title="Locations">
      <div className={`ellipse ${styles.ellipseLocations}`} />
      <div className={styles.locations}>
        {locations.map((location, index) => (
          <Panel
            key={index}
            title={location.name}
            cover={location.cover}
            buttonUrl={"#0"}
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
