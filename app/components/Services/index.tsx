import * as Styles from "./styles";

export default function Services() {
  const services = [
    {
      title: "Personalized Service",
      description: "All-in-one, on-site assistance and cleaning service",
    },
    {
      title: "Space and Furniture",
      description: "Adapted to the companies needs",
    },
    {
      title: "Meeting Rooms",
      description: "Two meetings rooms and two working pods",
    },
    {
      title: "Access 7am-23pm",
      description: "If necessary, there may be an extension time",
    },
    {
      title: "Global Access",
      description: "Access to all Workin-in and DeHouse common areas",
    },
    {
      title: "Expenses Included",
      description: "Wi-Fi acess, water and light included",
    },
  ];

  return (
    <Styles.Wrapper>
      <h2>Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <h3>{service.title}</h3>
            <span>{service.description}</span>
          </li>
        ))}
      </ul>
    </Styles.Wrapper>
  );
}
