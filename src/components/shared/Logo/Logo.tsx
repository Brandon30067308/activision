import { FC } from "react";
import activisionLogoWhite from "../../../assets/images/activision_logo_white.png";

const Logo: FC = () => {
  return (
    <div className="Logo flex items-center justify-center">
      <img alt="activision_logo_white" src={activisionLogoWhite} />
    </div>
  );
};

export default Logo;
