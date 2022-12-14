import Image from "next/image";
import * as Styles from "./styles";
import image001 from "/public/gallery/001.jpg";
import image002 from "/public/gallery/002.jpg";
import image003 from "/public/gallery/003.jpg";
import image004 from "/public/gallery/004.jpg";
import image005 from "/public/gallery/005.jpg";
import image006 from "/public/gallery/006.jpg";
import image007 from "/public/gallery/007.jpg";
import image008 from "/public/gallery/008.jpg";
import image009 from "/public/gallery/009.jpg";
import image010 from "/public/gallery/010.jpg";
import image011 from "/public/gallery/011.jpg";
import image012 from "/public/gallery/012.jpg";
import image013 from "/public/gallery/013.jpg";

export default function Gallery() {
  const images = [
    { src: image001, className: "circle" },
    { src: image002, className: "rectangle-h" },
    { src: image006, className: "rectangle-v" },
    { src: image003, className: "square" },
    { src: image005, className: "circle" },
    { src: image004, className: "rectangle-h" },
    { src: image007, className: "rectangle-v" },
    { src: image008, className: "square" },
    { src: image009, className: "circle" },
    { src: image010, className: "rectangle-h" },
    { src: image011, className: "rectangle-v" },
    { src: image012, className: "square" },
    { src: image013, className: "circle" },
  ];

  return (
    <Styles.Wrapper>
      {images.map((image, index) => (
        <div>
          <div key={index} className={image.className}>
            <Image
              src={image.src}
              alt="DeHouse"
              placeholder="blur"
              fill={true}
            />
          </div>
        </div>
      ))}
    </Styles.Wrapper>
  );
}
