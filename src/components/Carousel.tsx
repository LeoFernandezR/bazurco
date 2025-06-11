import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Parallax } from "swiper/modules";
import Home1 from "../assets/Comprometidos con el nuevo ambiente.jpg";
import Home2 from "../assets/acerca de nosotros.jpg";
import Home3 from "../assets/home-carousel-3.png";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/parallax";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    title: "Comprometidos con el medio ambiente",
    buttonText: "Conozca más",
    img: Home1.src,
  },
  {
    title: "Acerca de nosotros",
    buttonText: "Conozca nuestros servicios",
    img: Home2.src,
  },
  {
    title: "Facility Services",
    buttonText: "Acerca de nosotros",
    img: Home3.src,
  },
];

type Props = {};

function Carousel({}: Props) {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Parallax, EffectFade, Pagination]} // Importing Swiper modules
        slidesPerView={1} // Show 1 slide at a time
        loop={true} // Infinite loop
        autoplay={{
          delay: 1000 * 5, // Autoplay delay 5 seconds
          disableOnInteraction: false,
        }}
        className="h-[calc(100vh_-_145px)]" // Full screen height
        navigation
        parallax
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} size-4!"></span>`;
          },
          el: "#custom-swiper-pagination",
        }}
        effect="fade" // Fade effect
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="h-full w-full relative">
              <img
                src={slide.img}
                alt="limpieza bazurco"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                <div className="flex flex-col gap-6 justify-center items-center">
                  <h1 className="text-7xl">{slide.title}</h1>
                  <a
                    href="/sustentabilidad"
                    className="bg-indigo-500 rounded-lg text-white hover:bg-indigo-600 cursor-pointer py-2 px-4  transition-colors text-2xl"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center py-4">
        <div id="custom-swiper-pagination" className="w-auto! space-x-2!"></div>
      </div>
    </div>
  );
}

const SeparateSlides = () => (
  <>
    <SwiperSlide>
      <div className="h-full w-full relative">
        <img
          src={Home1.src}
          alt="limpieza bazurco"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-7xl">Comprometidos con el medio ambiente</h1>
            <a
              href="/sustentabilidad"
              className="bg-indigo-500 rounded-lg text-white hover:bg-indigo-600 cursor-pointer py-1 px-2  transition-colors text-2xl"
            >
              Conozca más
            </a>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="h-full w-full relative">
        <img
          src={Home2.src}
          alt="limpieza bazurco"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col text-white text-4xl font-bold items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-7xl">Acerca de nosotros</h1>
            <a
              href="/servicios"
              className="bg-indigo-500 rounded-lg text-white hover:bg-indigo-600 cursor-pointer py-1 px-2  transition-colors text-2xl"
            >
              Conozca nuestros servicios
            </a>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="h-full w-full relative">
        <img
          src={Home3.src}
          alt="limpieza bazurco"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col text-white text-4xl font-bold items-center justify-center">
          <div className="flex flex-col justify-center gap-4 items-center">
            <h1 className="text-7xl">Facility Services</h1>
            <a
              href="/nosotros"
              className="bg-indigo-500 rounded-lg text-white hover:bg-indigo-600 cursor-pointer py-1 px-2  transition-colors text-2xl"
            >
              Acerca de nosotros
            </a>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </>
);

export default Carousel;
