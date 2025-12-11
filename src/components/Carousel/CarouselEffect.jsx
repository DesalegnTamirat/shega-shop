import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { images } from "./assets/data";

function CarouselEffect() {
  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showThumbs={false}>
        {images.map((image) => (
          <img src={image} />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselEffect;
