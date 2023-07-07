import Image from "next/image";
import ButtonLink from "../ui/button-link";
import styles from "./styles.module.css";
import Image01 from "../../../public/gallery/001.jpg";
import Image02 from "../../../public/gallery/011.jpg";
import Ellipse from "../../../public/ellipse-01.png";

export default function Hero(props: any) {
  const { cities } = props;

  return (
    <div className={`ellipse ${styles.hero}`}>
      <Image
        className={`ellipse ${styles.ellipseHero}`}
        src={Ellipse}
        quality={10}
        alt=""
        placeholder="blur"
      />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            The first
            <br /> web3 Hub
            <br /> in Portugal.
          </h1>
          <p>
            We are a space where ideas manifest, grow and build. We act as an
            accelerator of creative potential and new ideas.
          </p>
          <p>
            We are the perfect place to inspire your work, build your voice and
            grow.
          </p>
          <div className={styles.buttons}>
            {cities.map((location: { city: string }) => (
              <ButtonLink url="#0" label={location.city} icon="arrowRight" />
            ))}
          </div>
        </div>
        <div className={styles.images}>
          <Image src={Image01} alt="" placeholder="blur" />
          <Image src={Image02} alt="" placeholder="blur" />
        </div>
      </div>
    </div>
  );
}
