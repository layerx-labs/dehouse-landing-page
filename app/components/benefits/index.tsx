import Section from "@/ui/section";
import styles from "./styles.module.css";

export default function Benefits() {
  const benefits = [
    {
      title: "Talks",
      description:
        "Workshops and discussions inspire Work-In members and partners to grow.",
    },
    {
      title: "Wellness",
      description:
        "Whether it’s yoga, surfing, running, or biking, physical activity boosts brain function.",
    },
    {
      title: "Social",
      description:
        "It’s important to balance work and personal life. Work-In offers leisure opportunities to all members - concerts, drinks, workshops, and more.",
    },
    {
      title: "Parking",
      description:
        "Parking open 24/7, secure, and a three-minute walk from the office, available for DeHouse members at 25€/month.",
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
