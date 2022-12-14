import * as Styles from "./styles";

export default function Benefits() {
  const benefits = [
    {
      id: "01",
      title: "Talks",
      description:
        "Workshops and discussions to inspire Work-In members and partners.",
    },
    {
      id: "02",
      title: "Wellness",
      description:
        "Whether it’s yoga, surfing or running, nothing makes the brain work better than physical activity.",
    },
    {
      id: "03",
      title: "Social",
      description:
        "It’s important to have a balance between work and personal life. Work-In provides moments of leisure to all its members - concerts, afternoon drinks, thematic workshops and much more.",
    },
    {
      id: "04",
      title: "Restaurants",
      description: "10% discount at Edifício Transparente restaurants.",
    },
    {
      id: "05",
      title: "Parking",
      description:
        "Parking opened 24/7, with security and three minutes walking distance from the office per 25€/month for DeHouse members.",
    },
  ];

  return (
    <Styles.Wrapper>
      <h2>Benefits</h2>
      <Styles.Benefits>
        {benefits.map((benefit) => (
          <div key={benefit.id}>
            <span>// {benefit.id}</span>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </Styles.Benefits>
    </Styles.Wrapper>
  );
}
