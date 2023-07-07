import Section from "@/ui/section";
import {
  Assistance,
  Forniture,
  Rooms,
  Time,
  Access,
  Expenses,
} from "@/ui/icons/services";
import styles from "./styles.module.css";

export default function Services() {
  const services = [
    {
      icon: <Assistance />,
      title: "Personalized Service",
      description: "All-in-one, on-site assistance and cleaning service.",
    },
    {
      icon: <Forniture />,
      title: "Space and Furniture",
      description: "Adapted to the companies needs.",
    },
    {
      icon: <Rooms />,
      title: "Meeting Rooms",
      description: "Two meetings rooms and two working pods.",
    },
    {
      icon: <Time />,
      title: "Access 7am-23pm",
      description: "If necessary, there may be an extension time.",
    },
    {
      icon: <Access />,
      title: "Global Access",
      description: "Access to all Workin-in and DeHouse common areas.",
    },
    {
      icon: <Expenses />,
      title: "Expenses Included",
      description: "Wi-Fi acess, water and light included.",
    },
  ];

  return (
    <Section title="Services">
      <div className={`ellipse ${styles.ellipseServices}`} />
      <div className={styles.services}>
        {services.map((service, index) => (
          <div key={index}>
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
