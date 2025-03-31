import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

type Props = {};

function Carousel({}: Props) {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Parallax]} // Importing Swiper modules
      slidesPerView={1} // Show 1 slide at a time
      loop={true} // Infinite loop
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay with 3 seconds delay
      className="h-screen" // Full screen height
      navigation
      parallax
    >
      <SwiperSlide>
        <img
          src="https://picsum.photos/800/600?random=1"
          alt="Slide 1"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/800/600?random=2"
          alt="Slide 2"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/800/600?random=3"
          alt="Slide 3"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/800/600?random=4"
          alt="Slide 4"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
