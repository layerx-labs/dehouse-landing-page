"use client";

import { useState } from "react";
import Link from "next/link";
import { DeHouseLogo } from "@/utils/brands";
import Icon from "@/ui/icons";
import styles from "./styles.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link className={styles.logo} href=".">
            <DeHouseLogo />
          </Link>
          <ul>
            <li>
              <Link
                href="https://twitter.com/DeHouseDAO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="twitter" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/dehouse.dao"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="instagram" />
              </Link>
            </li>
          </ul>
          <Link href="mailto:gm@dehouse.org">gm@dehouse.org</Link>
        </div>
        <div className={styles.newsletter}>
          <label>Newsletter</label>
          <span>Stay up-to-date with the lastest news and event</span>
          <div className={styles.input}>
            <input
              type="text"
              placeholder="Your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button
              onClick={() => {
                console.log("signup on newsletter");
              }}
            >
              Sign Up
            </button>
          </div>
          <span className={styles.copyright}>
            © Work-in Porto, {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
