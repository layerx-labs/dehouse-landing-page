"use client";

import Link from "next/link";
import Icon from "../Icon";
import * as Styles from "./styles";
import { colors } from "../../variables";

export default function Footer() {
  const scrollTopTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <Styles.Wrapper>
      <div>
        <span>© Work-In Porto, 2021</span>
        <ul>
          <li>
            <Link
              href="https://linkedin.com/company/work-in-porto"
              target="_blank"
            >
              <Icon icon="linkedin" />
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com/workin.caos" target="_blank">
              <Icon icon="instagram" />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button onClick={scrollTopTop}>
          <span>Back to top</span> <Icon icon="arrow" />
        </button>
      </div>
    </Styles.Wrapper>
  );
}
