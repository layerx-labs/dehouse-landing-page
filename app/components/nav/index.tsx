import Link from "next/link";
import DeHouseLogo from "@/utils/dehouse-logo";
import styles from "./styles.module.css";
import ButtonLink from "@/ui/button-link";

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
        <ButtonLink
          url={process.env.AVAILABILITY_FORM_URL ?? "#0"}
          label="Check availability"
        />
      </div>
    </nav>
  );
}
