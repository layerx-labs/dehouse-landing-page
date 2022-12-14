"use client";

import * as Styles from "./styles";
import Image from "next/image";
import Pin from "../../../utils/pin";
import map from "/public/map.jpg";
import Link from "next/link";

export default function Contacts() {
  return (
    <Styles.Wrapper>
      <h2>Join DeHouse today</h2>
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSeCef-PSnHMZmJrXL2XEnspo4dYqQl-7--QsyhZ201dilvlJw/viewform"
        target="_blank"
      >
        Reach out to us
      </Link>
      <address>
        <ul>
          <li>
            <span>Via do Castelo do Queijo, 395</span>
          </li>
          <li>
            <span>4100-429 Porto, Portugal</span>
          </li>
        </ul>
      </address>
      <Styles.Map className="map">
        <Link href="https://goo.gl/maps/JM5G4A9ythbBDbyB8" target="_blank">
          <Pin />
          <Image
            src={map}
            alt="DeHouse location"
            placeholder="blur"
            quality={100}
          />
        </Link>
      </Styles.Map>
    </Styles.Wrapper>
  );
}
