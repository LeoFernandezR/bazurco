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
                <h2 className="text-5xl ">
                  Comprometidos con el medio ambiente
                </h2>
                <a
                  href="/sustentabilidad"
                  className="bg-indigo-500 rounded-lg text-white hover:bg-indigo-600 cursor-pointer py-1 px-2  transition-colors text-xl"
                >
                  Conozca más
                </a>
              </div>
              {/* <div className="flex flex-col items-center gap-10">
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
              </div> */}
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
                <h2 className="text-5xl ">Acerca de nosotros</h2>
                <a
                  href="/servicios"
                  className="bg-indigo-500 rounded-lg text-white hover:bg-indigo-600 cursor-pointer py-1 px-2  transition-colors text-xl"
                >
                  Conozca nuestros servicios
                </a>
              </div>
              {/* <div className="flex justify-between px-12 py-8 w-full">
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
              </div> */}
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
                <h2 className="text-5xl ">Facility Services</h2>
                <a
                  href="/nosotros"
                  className="bg-indigo-500 rounded-lg text-white hover:bg-indigo-600 cursor-pointer py-1 px-2  transition-colors text-xl"
                >
                  Acerca de nosotros
                </a>
              </div>
              {/* <div className="flex justify-end ">
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
              </div> */}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center py-4">
        <div id="custom-swiper-pagination" className="w-auto! space-x-2!"></div>
      </div>
    </div>
  );
}

export default Carousel;
