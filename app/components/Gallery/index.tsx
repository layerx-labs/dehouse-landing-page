import Image from "next/image";
import * as Styles from "./styles";
import image1 from "/public/gallery/dehouse27.jpg";

export default function Gallery() {
  const images = [
    { src: image1, className: "circle" },
    { src: image1, className: "rectangle-h" },
    { src: image1, className: "rectangle-v" },
    { src: image1, className: "square" },
    { src: image1, className: "circle" },
    { src: image1, className: "rectangle-h" },
    { src: image1, className: "rectangle-v" },
    { src: image1, className: "square" },
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
