import Image from "next/image";
import ButtonLink from "../ui/button-link";
import styles from "./styles.module.css";
import Image01 from "../../../public/dehouse-braga-2.jpg";
import Image02 from "../../../public/dehouse-porto-1.jpg";
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
          <h1>Workspaces for the next tech frontier</h1>
          <p>
            We are a space where ideas manifest, grow and build. We act as an
            accelerator of creative potential and new ideas.
          </p>
          <p>
            Our network of <strong>Coworking Spaces</strong> is more than just a
            place to work – it&apos;s a hub for sharing knowledge, cultivating
            connections, and nurturing your wellbeing. <br />
            <br />
            From workshops and seminars to networking events and wellness
            activities, we empower our members to grow both personally and
            professionally. <br />
            <br />
            Join us and be part of a dynamic community that values your success
            as much as your happiness!
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
