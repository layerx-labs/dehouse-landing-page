import Link from "next/link";
import DeHouseLogo from "@/utils/dehouse-logo";
import styles from "./styles.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div>
        <DeHouseLogo />
        <ul>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#locations">Locations</Link>
          </li>
          <li>
            <Link href="#agenda">Agenda</Link>
          </li>
        </ul>
        <Link
          className={styles.button}
          href={process.env.AVAILABILITY_FORM_URL ?? "#0"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check availability
        </Link>
      </div>
    </nav>
  );
}
