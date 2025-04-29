import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Parallax } from "swiper/modules";
import Home1 from "../assets/home-1.webp";
import Home2 from "../assets/home-2.webp";
import Home3 from "../assets/home-3.webp";
import Logo from "../assets/bazurco logo.png";
import LogoLetteringSVG from "../assets/bazurco-logo-lettering.svg";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/parallax";
import LogoLettering from "./LogoLettering";

type Props = {};

function Carousel({}: Props) {
  return (
    <Swiper
      modules={[Autoplay, Parallax]} // Importing Swiper modules
      slidesPerView={1} // Show 1 slide at a time
      loop={true} // Infinite loop
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay with 3 seconds delay
      className="h-screen" // Full screen height
      navigation
      parallax
    >
      <SwiperSlide>
        <div className="h-full w-full relative">
          <img
            src={Home1.src}
            alt="limpieza bazurco"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
            <div className="flex flex-col items-center gap-10">
              <div className="flex items-center flex-col">
                <div className="w-[150px]">
                  <img
                    src={Logo.src}
                    alt="bazurco logo limpieza"
                    className=""
                  />
                </div>
                <div className="w-[500px]">
                  <LogoLettering />
                </div>
              </div>
              <div className="text-center text-blue-400 flex flex-col gap-2">
                <h3>Mantenimiento</h3>
                <h3 className="text-white">Limpieza</h3>
                <h3>Mucho mas</h3>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full w-full relative">
          <img
            src={Home2.src}
            alt="limpieza bazurco"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="absolute inset-0 flex flex-col text-white text-4xl font-bold justify-between">
            <div className="flex justify-between px-12 py-8 w-full">
              <div className="w-[150px]">
                <img
                  src={Logo.src}
                  alt="bazurco logo limpieza"
                  className="opacity-50"
                />
              </div>
              <div className="max-w-xl pt-2">
                <h2 className="text-center text-6xl font-bold">
                  ¡Limpia tu empresa con nosotros!
                </h2>
              </div>
            </div>
            <div className="flex justify-end ">
              <a href="/servicios">
                <span className="block bg-blue-800 rounded-full py-4 px-12 mb-24 mr-12">
                  <h2 className="text-5xl">Servicios</h2>
                </span>
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
            className="w-full h-full -scale-x-100"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="absolute inset-0 flex flex-col text-white text-4xl font-bold justify-between">
            <div className="flex justify-end ">
              <a href="/servicios">
                <span className="block bg-blue-800 rounded-full py-4 px-12 mt-24 mr-12">
                  <h2 className="text-4xl">Mantenimiento General</h2>
                </span>
              </a>
            </div>
            <div className="flex justify-end px-16 py-12 w-full">
              <div className="w-[150px]">
                <img src={Logo.src} alt="bazurco logo limpieza" />
                <LogoLettering />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
