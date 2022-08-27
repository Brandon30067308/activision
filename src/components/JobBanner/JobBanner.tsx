import { FC } from "react";
import breakpoints from "../../breakpoints";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const JobBanner: FC = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="JobBanner w-full">
      <div className="w-full h-full flex justify-between items-center">
        <div className="main-content flex flex-col justify-center">
          {width > breakpoints.md && (
            <>
              <h2>HAVE FUN</h2>
              <p className="text-xl">Learn More About Job Opportunities</p>
              <button>JOIN US</button>
            </>
          )}
        </div>
        <div className="teams flex flex-col justify-center">
          {width <= breakpoints.md && (
            <div className="content flex flex-col items-center">
              <h2>HAVE FUN</h2>
              <p className="text-xl">Learn More About Job Opportunities</p>
              <button className="text-base">JOIN US</button>
            </div>
          )}
          <h2 className="text-2xl">Our Teams</h2>
          <div className="teams-list flex items-start">
            <div className="flex flex-col">
              <p className="team">game design</p>
              <p className="team">art {"&"} animation</p>
              <p className="team">brand management</p>
              <p className="team">production</p>
              <p className="team">quality assurance</p>
            </div>
            <div className="flex flex-col">
              <p className="team">customer support</p>
              <p className="team">studio operations</p>
              <p className="team">programming</p>
              <p className="team">financing {"&"} accounting</p>
              <p className="team">human resources</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBanner;
