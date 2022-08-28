import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import codSlideImage from "../../assets/images/cod-warzone-slide.jpg";
import downloadsSlideImage from "../../assets/images/downloads-slide.png";
import newOperatorProgressionSlide from "../../assets/images/new-operator-progression-slide.jpg";
import warzoneBugFixesSlide from "../../assets/images/warzone-bug-fixes-slide.png";
import ravenSoftwareLogo from "../../assets/images/raven-software-logo.jpg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import breakpoints from "../../breakpoints";

const Community: FC = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="Community w-full flex justify-center">
      <div className="container w-full flex flex-col items-center">
        <div className="header w-full flex flex-col items-center">
          <h2 className="heading text-3xl">Community</h2>
        </div>
        <div className="slide w-full">
          <div className="tagboard-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="50px"
              height="50px"
              viewBox="0 0 50 50"
              version="1.1"
            >
              <title>Produced with Tagboard</title>
              <desc>Created with Sketch.</desc>
              <defs />
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <path
                  d="M20.4032588,21.812404 L19.7923919,27.2662875 L26.9361946,27.2662875 L27.6007966,21.812404 L20.4032588,21.812404 L20.4032588,21.812404 L20.4032588,21.812404 Z M41,16.8221988 L40.438094,21.797204 L33.699881,21.812404 L32.4556525,32.1185465 L32.4533225,32.1185465 C32.3199974,33.6122012 32.6776573,34.8135031 34.5442485,34.8135031 C35.9097722,34.8135031 37.3465987,34.4491597 38.6396358,33.9483977 L39.1407034,38.1828388 C37.6348272,38.9569347 35.5275172,39.5488208 33.2972319,39.5488208 C28.700128,39.5488208 26.5244944,37.1811619 26.3283065,33.5385308 C26.3042461,33.0915035 26.3176511,32.6053687 26.3566443,32.1185465 L19.2324336,32.1285526 L18.5197107,38.3124596 L12.6144081,38.3124596 L13.3271309,32.1285526 L9,32.1285526 L9,27.2662875 L13.887051,27.2662875 L14.4980325,21.812404 L9.86537269,21.812404 L9.86537269,16.8287678 L15.0579909,16.8287678 L15.7707136,11.1225935 L21.6760163,11.1225935 L20.9632936,16.8287678 L28.2100978,16.8221988 L28.9382497,11 L35.0373723,11 L34.3091823,16.8221988 L41,16.8221988 L41,16.8221988 L41,16.8221988 Z"
                  id="hash-t-white"
                  fill="#FFFFFF"
                  fillRule="nonzero"
                />
              </g>
            </svg>
          </div>
          <Swiper
            slidesPerView={
              width <= breakpoints.md ? 1 : width <= breakpoints.lg ? 2 : 3
            }
            slidesPerGroup={1}
            spaceBetween={12}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 3000,
            }}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            speed={750}
            className="w-full"
          >
            <button className="swiper-button-prev">
              <ChevronLeftIcon />
            </button>
            <button className="swiper-button-next">
              <ChevronRightIcon />
            </button>
            <SwiperSlide>
              <div className="slide-item-1 w-full flex flex-col justify-center">
                <div className="slide-item-background"></div>
                <div className="content instagram w-full h-full flex items-center justify-center">
                  <img src={codSlideImage} alt="cod_slide" className="w-full" />
                  <div className="social w-full flex items-center justify-between">
                    <p className="text-lg">beenoxteam</p>
                    <div>
                      <FontAwesomeIcon icon={faInstagram} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item-2 w-full">
                <div className="slide-item-background"></div>
                <div className="content twitter w-full h-full flex items-center justify-center">
                  <img
                    src={newOperatorProgressionSlide}
                    alt="new_operator_progression_slide"
                    className="w-full"
                  />
                  <div className="w-full social flex justify-between items-center">
                    <div className="social-left flex items-center">
                      <div className="raven-logo">
                        <img
                          src={ravenSoftwareLogo}
                          alt="raven_software_logo"
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="tw-handle flex items-center">
                          <span>Raven Software</span>
                          <svg
                            viewBox="0 0 24 24"
                            aria-label="Verified account"
                            role="img"
                            className="verified-flag"
                          >
                            <g>
                              <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                            </g>
                          </svg>
                        </p>
                        <p>@RavenSoftware</p>
                      </div>
                    </div>
                    <div className="social-right">
                      <FontAwesomeIcon icon={faTwitter} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item-3 w-full">
                <div className="slide-item-background"></div>
                <div className="content twitter w-full h-full flex items-center justify-center">
                  <img
                    src={downloadsSlideImage}
                    alt="downloads_size_slide"
                    className="w-full"
                  />
                  <div className="w-full social flex justify-between items-center">
                    <div className="social-left flex items-center">
                      <div className="raven-logo">
                        <img
                          src={ravenSoftwareLogo}
                          alt="raven_software_logo"
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="tw-handle flex items-center">
                          <span>Raven Software</span>
                          <svg
                            viewBox="0 0 24 24"
                            aria-label="Verified account"
                            role="img"
                            className="verified-flag"
                          >
                            <g>
                              <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                            </g>
                          </svg>
                        </p>
                        <p>@RavenSoftware</p>
                      </div>
                    </div>
                    <div className="social-right">
                      <FontAwesomeIcon icon={faTwitter} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item-4 w-full">
                <div className="slide-item-background"></div>
                <div className="content instagram flex w-full h-full">
                  <p>treyarch</p>
                  <div>
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item-5 w-full">
                <div className="slide-item-background"></div>
                <div className="content twitter w-full h-full flex items-center justify-center">
                  <img
                    src={warzoneBugFixesSlide}
                    alt="warzone_bug_fixes_slide"
                    className="w-full"
                  />
                  <div className="w-full social flex justify-between items-center">
                    <div className="social-left flex items-center">
                      <div className="raven-logo">
                        <img
                          src={ravenSoftwareLogo}
                          alt="raven_software_logo"
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="tw-handle flex items-center">
                          <span>Raven Software</span>
                          <svg
                            viewBox="0 0 24 24"
                            aria-label="Verified account"
                            role="img"
                            className="verified-flag"
                          >
                            <g>
                              <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                            </g>
                          </svg>
                        </p>
                        <p>@RavenSoftware</p>
                      </div>
                    </div>
                    <div className="social-right">
                      <FontAwesomeIcon icon={faTwitter} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Community;
