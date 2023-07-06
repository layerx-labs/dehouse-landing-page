import Link from "next/link";
import Icon from "../icons";
import styles from "./styles.module.css";
import { ButtonLinkProps } from "./types";

export default function ButtonLink(props: ButtonLinkProps) {
  const { url, label, icon, external = false } = props;

  return (
    <>
      {external ? (
        <Link
          href={url}
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label} {icon && <Icon icon={icon} />}
        </Link>
      ) : (
        <Link href={url} className={styles.button}>
          {label} {icon && <Icon icon={icon} />}
        </Link>
      )}
    </>
  );
}
