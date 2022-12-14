"use client";

import Link from "next/link";
import Icon from "../Icon";
import * as Styles from "./styles";

export default function Footer() {
  const scrollTopTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <Styles.Wrapper>
      <div className="social">
        <ul>
          <li>
            <Link href="https://twitter.com/DeHouseDAO" target="_blank">
              <Icon icon="twitter" />
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com/dehouse.dao" target="_blank">
              <Icon icon="instagram" />
            </Link>
          </li>
        </ul>
        <span>
          DeHouse © Made with ❤️ by{" "}
          <Link href="https://taikai.network" target="_blank">
            TAIKAI
          </Link>
        </span>
      </div>
      <div className="back">
        <button onClick={scrollTopTop}>
          <span>Back to top</span> <Icon icon="arrow" />
        </button>
      </div>
    </Styles.Wrapper>
  );
}
