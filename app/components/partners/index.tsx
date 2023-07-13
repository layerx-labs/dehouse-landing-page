import Image from "next/image";
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
import Ellipse from "../../../public/ellipse-02.png";

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
      <Image
        className={`ellipse ${styles.ellipsePartners}`}
        src={Ellipse}
        quality={10}
        alt=""
        placeholder="blur"
      />
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
