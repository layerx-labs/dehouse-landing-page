import Marquee from "react-fast-marquee";
import styles from "./styles.module.css";
import {
  LayerX,
  Bepro,
  Subvisual,
  ETHFoundation,
  Aurora,
  Utrust,
  Polkamarkets,
  BrightPixel,
} from "@/utils/brands";

export default function Partners() {
  const logoFill = "var(--partnersColor)";
  const partners = [
    {
      logo: <LayerX fill={logoFill} />,
      name: "LayerX",
    },
    {
      logo: <Bepro fill={logoFill} />,
      name: "Bepro Network",
    },
    {
      logo: <Subvisual fill={logoFill} />,
      name: "Subvisual",
    },
    {
      logo: <ETHFoundation fill={logoFill} />,
      name: "ETH Foundation",
    },
    {
      logo: <Aurora fill={logoFill} />,
      name: "Aurora",
    },
    {
      logo: <Utrust fill={logoFill} />,
      name: "Utrust",
    },
    {
      logo: <Polkamarkets fill={logoFill} />,
      name: "Polkamarkets",
    },
    {
      logo: <BrightPixel fill={logoFill} />,
      name: "Bright Pixel",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={`ellipse ${styles.ellipsePartners}`} />
      <h2>Partners</h2>
      <Marquee gradient={false} direction="left">
        <ul>
          {partners.map((item, index) => (
            <li key={index}>{item.logo}</li>
          ))}
        </ul>
      </Marquee>
    </div>
  );
}
