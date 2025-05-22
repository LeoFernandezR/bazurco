import { Swiper, SwiperSlide } from "swiper/react";

import { clientsImages as ImagesPromise } from "../lib/loadImages";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

interface Image {
  path: string;
  metadata: { src: string };
}

export default function ClientsCarousel() {
  const [clientsImages, setClientsImages] = useState<Image[]>([]);
  const [loadingImages, setLoadingImages] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      setLoadingImages(true);
      const _images = Object.entries(ImagesPromise);
      const images = await Promise.all(
        _images.map(async ([path, image]) => {
          const metadata = (await image()) as { src: string };
          return { path, metadata };
        })
      );

      setClientsImages(images);
      setLoadingImages(false);
    };
    loadImages();
    return () => {};
  }, []);

  return (
    <div className="py-24 bg-blue-950 ">
      <div className="w-[85%] mx-auto ">
        <h2 className="text-center text-2xl font-bold mb-8 text-white">
          Nuestros Clientes
        </h2>
        <Swiper
          slidesPerView={5}
          modules={[Navigation, Autoplay]}
          spaceBetween={40}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{ enabled: true }}
        >
          {loadingImages ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-t-4 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          ) : (
            clientsImages.map(({ path, metadata: { src } }) => (
              <SwiperSlide
                key={path}
                className="flex justify-center items-center !bg-white !size-[200px] "
              >
                <img
                  src={src}
                  alt="client logo"
                  className="object-contain w-full h-full"
                />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
}
