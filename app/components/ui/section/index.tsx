import styles from "./styles.module.css";
import { SectionProps } from "./types";

export default function Section(props: SectionProps) {
  const { id, title, subtitle, children } = props;

  return (
    <div id={id} className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        {children}
      </div>
    </div>
  );
}
