import Image from "next/image";
import ButtonLink from "../ui/button-link";
import styles from "./styles.module.css";
import Image01 from "../../../public/hero-01.jpg";
import Image02 from "../../../public/hero-02.jpg";
import Ellipse from "../../../public/ellipse-01.png";

export default function Hero(props: any) {
  const { cities } = props;

  return (
    <div className={`${styles.hero}`}>
      <Image
        className={`ellipse ${styles.ellipseHero}`}
        src={Ellipse}
        quality={10}
        alt=""
        placeholder="blur"
      />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Workspaces for the Next Tech Frontier</h1>
          <p>
            We are a space where ideas manifest, grow and build. We act as an
            accelerator of creative potential and new ideas.
          </p>
          <p>
          Get to know more about our universe, join our talks and workshops, participate in our 
          wellness activities and discover the best work life balance. Our promise is to inspire 
          DeHouse members and partners, as well as the local communities.
          </p>
          {cities && (
            <div className={styles.buttons}>
              {cities.map((location: { city: string }, index: number) => (
                <ButtonLink
                  key={index}
                  url="#locations"
                  label={location.city}
                  icon="arrowRight"
                />
              ))}
            </div>
          )}
        </div>
        <div className={styles.images}>
          <div>
            <Image src={Image01} alt="" placeholder="blur" quality={100} />
            <Image src={Image02} alt="" placeholder="blur" quality={100} />
          </div>
        </div>
      </div>
    </div>
  );
}
