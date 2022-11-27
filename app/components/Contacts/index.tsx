"use client";

import * as Styles from "./styles";
import Image from "next/image";
import Pin from "../../../utils/pin";
import map from "/public/map.jpg";

export default function Contacts() {
  return (
    <Styles.Wrapper>
      <h2>Join DeHouse today</h2>
      <button
        onClick={() => {
          console.log("click!");
        }}
      >
        <span>Reach out to us</span>
      </button>
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
        <Pin />
        <Image
          src={map}
          alt="DeHouse location"
          placeholder="blur"
          quality={100}
        />
      </Styles.Map>
    </Styles.Wrapper>
  );
}
