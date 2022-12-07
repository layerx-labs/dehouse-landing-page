import { sliderPhotos } from "../../data";
import NextImage from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const ImageSlider = () => {
  return (
    <div className="max-w-[65rem]">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        dynamicHeight={false}
        swipeable={true}
      >
        {sliderPhotos.map(({ url, key }) => (
          <NextImage
            height="2000"
            width="3000"
            key={key}
            src={url}
            alt={`slider-image-${key}`}
            style={{ minHeight: "20rem", maxHeight: "40rem" }}
          />
        ))}
      </Carousel>
    </div>
  );
};

export { ImageSlider };
