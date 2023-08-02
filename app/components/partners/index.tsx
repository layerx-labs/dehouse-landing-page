import Image from "next/image";
import Marquee from "react-fast-marquee";
import styles from "./styles.module.css";
import {
  LayerX,
  Subvisual,
  Utrust,
  Caos,
  Chainlink,
  Exclusible,
  Lympid,
  RealFevr,
  WebSummit,
  Workin,
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
      logo: <Subvisual fill={logoFill} />,
      name: "Subvisual",
    },
    {
      logo: <Utrust fill={logoFill} />,
      name: "Utrust",
    },
    {
      logo: <WebSummit fill={logoFill} />,
      name: "Web Summit",
    },
    {
      logo: <Exclusible fill={logoFill} />,
      name: "Exclusible",
    },
    {
      logo: <Chainlink fill={logoFill} />,
      name: "Chainlink",
    },
    {
      logo: <Lympid fill={logoFill} />,
      name: "Lympid",
    },
    {
      logo: <RealFevr fill={logoFill} />,
      name: "RealFevr",
    },
    {
      logo: <Caos fill={logoFill} />,
      name: "CAOS",
    },
    {
      logo: <Workin fill={logoFill} />,
      name: "Workin",
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
