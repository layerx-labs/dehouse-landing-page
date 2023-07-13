import Image from "next/image";
import ButtonLink from "@/ui/button-link";
import styles from "./styles.module.css";
import { PanelProps } from "./types";
import Icon from "../icons";

export default function Panel(props: PanelProps) {
  const { title, cover, icons, children, buttonUrl, buttonLabel } = props;
  const { width, height, url } = cover;

  return (
    <div className={styles.panel}>
      <div className={styles.cover}>
        <Image width={width} height={height} src={url} alt={title} />
      </div>
      <div className={styles.details}>
        <div>
          <h3>{title}</h3>
          {icons && (
            <ul>
              {icons.map((icon, index) => (
                <li key={index}>
                  <Icon icon={icon} />
                </li>
              ))}
            </ul>
          )}
        </div>
        {children}
      </div>
      <ButtonLink
        url={buttonUrl}
        label={buttonLabel}
        icon="arrowRight"
        external
      />
    </div>
  );
}
