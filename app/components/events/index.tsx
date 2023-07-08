import Section from "@/ui/section";
import Panel from "@/ui/panel";
import ButtonLink from "../ui/button-link";
import styles from "./styles.module.css";
import { EventsProps } from "./types";

export default function Events(props: EventsProps) {
  const { events } = props;

  return (
    <Section
      id="agenda"
      title="Agenda"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    >
      <div className={styles.events}>
        {events.map((event, index) => (
          <Panel
            key={index}
            title={event.name}
            cover={event.cover}
            buttonUrl={event.eventWebsite}
            buttonLabel="See more"
          >
            <span>{event.date}</span>
          </Panel>
        ))}
      </div>
      <ButtonLink url="https://lu.ma/dehousetalks" label="View past" external />
    </Section>
  );
}
