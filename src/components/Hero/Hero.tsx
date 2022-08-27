import { FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperType, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import codmLogo from "../../assets/images/cod-mw2-logo.png";
import cbLogo from "../../assets/images/cb-iat4-logo.png";
import thPSLogo from "../../assets/images/T_H-PS1+2-logo.png";

const Hero: FC = () => {
  const swiperRef = useRef<null | SwiperType>(null);

  useEffect(() => {
    const paginationBullets = document.querySelectorAll(
      ".swiper-pagination-bullet"
    );
    Array.from(paginationBullets).map((bullet, i) => {
      bullet.addEventListener("click", () => {
        swiperRef.current && swiperRef.current.slideTo(i + 1);
      });
    });
  }, []);

  return (
    <div className="Hero w-full">
      <div className="container flex flex-col items-center justify-center">
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 7250,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          speed={750}
          pagination={{
            el: ".swiper-pagination",
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full"
        >
          <div className="slide-control flex justify-between items-center">
            <button
              className="button-left items-center"
              onClick={() => {
                swiperRef.current && swiperRef.current.slidePrev();
              }}
            >
              <ArrowLeftIcon />
            </button>
            <div className="swiper-pagination" />
            <button
              className="button-right items-center"
              onClick={() => {
                swiperRef.current && swiperRef.current.slideNext();
              }}
            >
              <ArrowRightIcon />
            </button>
          </div>
          <SwiperSlide>
            <div className="w-full h-full">
              <div className="slide-media">
                <video
                  className="slide-video"
                  src="https://www.activision.com/cdn/videos/crashbandicoot_crash4.mp4"
                  autoPlay={true}
                  playsInline={true}
                  loop={true}
                  muted={true}
                />
              </div>
              <div className="slide-content w-full h-full flex flex-col items-center justify-center">
                <div className="logo-container flex items-center justify-center">
                  <img src={cbLogo} alt="cb_logo" />
                </div>
                <p className="text-xl">
                  Purchase Now For PS4™ {"&"} XBOX One® Get PS5™, Xbox Series
                  X|S® Upgrade at No Additional Cost!
                </p>
                <div className="cta-btns flex items-center">
                  <button className="preorder-btn text-lg">buy game</button>
                  <button className="visitsite-btn text-lg">visit site</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full">
              <div className="slide-media">
                <video
                  className="slide-video"
                  src="https://www.callofduty.com/cod/cdn/mw2/videos/mw2-reveal-clip.mp4"
                  autoPlay={true}
                  playsInline={true}
                  loop={true}
                  muted={true}
                />
              </div>
              <div className="slide-content w-full h-full flex flex-col items-center justify-center">
                <div className="logo-container flex items-center justify-center">
                  <img src={codmLogo} alt="codm_logo" />
                </div>
                <p className="text-xl">
                  THE NEW ERA OF CALL OF DUTY DROPS OCTOBER 28th
                </p>
                <div className="cta-btns flex items-center">
                  <button className="preorder-btn">pre-order mwii</button>
                  <button className="visitsite-btn">visit site</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full">
              <div className="slide-media">
                <video
                  className="slide-video"
                  src="https://video.activision.com/activision/cdn/videos/tony-hawk-pro-1-2.mp4"
                  autoPlay={true}
                  playsInline={true}
                  loop={true}
                  muted={true}
                />
              </div>
              <div className="slide-content w-full h-full flex flex-col items-center justify-center">
                <div className="logo-container flex items-center justify-center">
                  <img src={thPSLogo} alt="thPS_logo" />
                </div>
                <p className="text-xl">
                  Available Now For PS4™, XBOX One® {"&"} PC!
                </p>
                <div className="cta-btns flex items-center">
                  <button className="preorder-btn">buy game</button>
                  <button className="visitsite-btn">visit site</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
