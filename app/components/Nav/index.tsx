"use client";

import DeHouseLogo from "../../../utils/dehouse-logo";
import Icon from "../Icon";
import { colors } from "../../variables";
import * as Styles from "./styles";

export default function Nav() {
  return (
    <Styles.Wrapper>
      <div className="logo">
        <DeHouseLogo />
      </div>
      <div className="actions">
        <button
          onClick={() => {
            console.log("change to light mode");
          }}
        >
          <Icon icon="sun" fill={colors.white} />
        </button>
      </div>
    </Styles.Wrapper>
  );
}
