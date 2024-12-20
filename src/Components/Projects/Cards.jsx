import { Swiper, SwiperSlide } from "swiper/react";
import app from "../../App.module.css";
import items from "./Items";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import pro from "./project.module.css";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Cards() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-row ">
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        navigation={true}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 150,
          modifier: 2,
          slideShadows: false,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper h-[500px]"
      >
        {items.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="flex gap-10 w-[500px] items-center justify-center"
            >
              <div
                key={item.id}
                className={`${pro.flip_card} cursor-pointer`}
                data-aos="fade-up"
              >
                <div
                  className={`${pro.flip_card_front} w-[250px] md:w-[380px] min-h-[350px] md:min-h-[400px] bg-cover bg-center h-64 rounded-lg shadow-lg `}
                  style={{ backgroundImage: `url(${item.url})` }}
                >
                  <div className={`${pro.inner} inner`}>
                    <h3
                      className={` ${app.roboto} text-white text-lg md:text-2xl uppercase font-bold `}
                    >
                      {item.name}
                    </h3>
                  </div>
                </div>
                <div
                  className={`${pro.flip_card_back} w-[250px] md:w-[380px] min-h-[350px] md:min-h-[400px] bg-cover bg-center h-64 rounded-lg shadow-lg `}
                  style={{ backgroundImage: `url(${item.url})` }}
                >
                  <div
                    className={`${pro.inner} inner p-5 flex flex-col gap-20 items-center`}
                  >
                    <p className="text-white text-[12px] md:text-[18px] ">
                      {item.desc}
                    </p>
                    <a
                      href={item.git}
                      target="_blank"
                      className="text-[10px] md:text-[18px] bg-white text-black w-fit px-5 rounded-md shadow-md shadow-white hover:text-white hover:bg-black border-2 border-red-950"
                    >
                      Github Repo
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
