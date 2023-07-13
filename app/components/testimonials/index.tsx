import Image from "next/image";
import Marquee from "react-fast-marquee";
import Icon from "@/ui/icons";
import Ellipse from "../../../public/ellipse-02.png";
import styles from "./styles.module.css";
import { TestimonialsProps } from "./types";
import Link from "next/link";

export default function Testimonials(props: TestimonialsProps) {
  const { testimonials } = props;

  if (!testimonials) return <></>;

  return (
    <div className={styles.wrapper}>
      <h2>Testimonials</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <Image
        className={`ellipse ${styles.ellipseTestimonials}`}
        src={Ellipse}
        quality={10}
        alt=""
        placeholder="blur"
      />
      <div className={styles.testimonials}>
        <Marquee gradient={false} direction="right" speed={25} pauseOnHover>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.panel}>
              <div className={styles.avatar}>
                {item?.avatar?.url && (
                  <Image
                    width={40}
                    height={40}
                    src={item.avatar.url}
                    alt={item.name}
                  />
                )}
              </div>
              <div className={styles.message}>
                <p>{item.message}</p>
              </div>
              <div className={styles.author}>
                {item.twitter ? (
                  <>
                    <Icon icon="twitter" />
                    <Link
                      href={item.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </Link>
                  </>
                ) : (
                  item.name
                )}
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
