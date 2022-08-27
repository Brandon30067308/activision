import { FC } from "react";
import bannerImg from "../../assets/images/support-banner-v3.jpg";

const SupportBanner: FC = () => {
  return (
    <div className="SupportBanner w-full">
      <div className="w-full flex justify-between items-center">
        <div className="banner-content w-full flex flex-col">
          <h2 className="banner-heading text-2xl">WE'RE HERE TO HELP!</h2>
          <p className="text-lg">
            Get answers to frequently asked questions, chat with a support
            expert, and engage with the support community
          </p>
          <button className="text-base">Visit Support</button>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="banner_img" />
        </div>
      </div>
    </div>
  );
};

export default SupportBanner;
