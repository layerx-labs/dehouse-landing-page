import Link from "next/link";
import DeHouseLogo from "../../../utils/dehouse-logo";
import TaikaiLogo from "../../../utils/taikai-logo";
import WorkInLogo from "../../../utils/workin-logo";
import * as Styles from "./styles";

export default function Hero() {
  return (
    <Styles.Wrapper>
      <DeHouseLogo />
      <h1>
        <span className="sr-only">DeHouse - </span> The first Crypto Hub in
        Portugal
      </h1>
      <Styles.PoweredBy>
        <Link href="#0" target="_blank">
          <TaikaiLogo className="taikai" />
        </Link>
        <span>x</span>
        <Link href="#0" target="_blank">
          <WorkInLogo className="work-in" />
        </Link>
      </Styles.PoweredBy>
      <p>
        We are a space where ideas manifest, grow and build. We act as an
        accelerator of creative potential and new ideas. We are the perfect
        place to inspire your work, build your voice and grow.
      </p>
    </Styles.Wrapper>
  );
}
