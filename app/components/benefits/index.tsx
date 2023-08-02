import Section from "@/ui/section";
import styles from "./styles.module.css";

export default function Benefits() {
  const benefits = [
    {
      title: "Talks",
      description:
        "Discussion Panels, Workshops, Meetups inspire DeHouse members and partners to grow, learn and evolve their ideas",
    },
    {
      title: "Wellness",
      description:
        "Whether it’s yoga, surfing, running, or biking, physical activity boosts brain function.",
    },
    {
      title: "Social",
      description:
        "It’s important to balance work and personal life. DeHouse offers leisure opportunities to all members - concerts, drinks, workshops, and more.",
    },
    {
      title: "Parking",
      description:
        "Parking open 24/7, secure, available for DeHouse members at a discount.",
    },
  ];

  return (
    <Section title="Benefits">
      <div className={styles.benefits}>
        {benefits.map((benefit, index) => (
          <div key={index}>
            <div>{index + 1}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
