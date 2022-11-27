import * as Styles from "./styles";

export default function Packs() {
  const packs = [
    {
      title: "Daily pass",
      description: ["Flex desk", "10€/day"],
    },
    {
      title: "Doge",
      description: ["Flex desk", "5 days → 40€"],
      footnote: "20% off on the daily pass",
    },
    {
      title: "Vitalik",
      description: ["Flex desk", "15 days → 100€"],
      footnote: "33% off on the daily pass",
    },
    {
      title: "Satoshi",
      description: ["Fix desk", "Full month → 160€"],
      footnote: "47% off on the daily pass",
    },
  ];

  return (
    <Styles.Wrapper>
      <h2>Packs</h2>
      <Styles.Packs>
        {packs.map((pack, index) => (
          <Styles.Pack key={index}>
            <Styles.Fold />
            <h2>{pack.title}</h2>
            <ul>
              {pack.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {pack.footnote && <span>{pack.footnote}</span>}
          </Styles.Pack>
        ))}
      </Styles.Packs>
    </Styles.Wrapper>
  );
}
