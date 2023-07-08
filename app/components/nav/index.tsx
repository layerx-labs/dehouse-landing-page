import Link from "next/link";
import { DeHouseLogo } from "@/utils/brands";
import styles from "./styles.module.css";
import ButtonLink from "@/ui/button-link";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div>
        <Link className={styles.logo} href=".">
          <DeHouseLogo />
        </Link>
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
          url={
            process.env.AVAILABILITY_FORM_URL ??
            "https://docs.google.com/forms/d/e/1FAIpQLSdWHT8HksOtO54IHY8k29c9Jltnafdc0PhHtxkG8XDyzMicJg/viewform"
          }
          label="Check availability"
          external
        />
      </div>
    </nav>
  );
}
