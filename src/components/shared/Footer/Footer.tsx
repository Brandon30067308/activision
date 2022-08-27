import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowUpIcon } from "@heroicons/react/20/solid";
import { FC } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import esrbImage from "../../../assets/images/esrb-e-m.jpg";
import esrbUpdatedImage from "../../../assets/images/ESRB_updated.jpg";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Footer: FC = () => {
  const { width } = useWindowDimensions();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="Footer w-full">
      <div>
        {width <= 1024 && (
          <div className="flag-en flex justify-center">
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#f0f0f0" d="M0 85.331h512v341.337H0z" />
                <path
                  fill="#d80027"
                  d="M0 127.994h512v42.663H0zM0 213.331h512v42.663H0zM0 298.657h512v42.663H0zM0 383.994h512v42.663H0z"
                />
                <path fill="#2e52b2" d="M0 85.331h256v183.797H0z" />
                <path
                  fill="#f0f0f0"
                  d="m99.822 160.624-4.123 12.684H82.363l10.791 7.835-4.123 12.683 10.791-7.835 10.784 7.835-4.122-12.683 10.791-7.835h-13.337zM103.938 219.08l-4.116-12.683-4.123 12.683H82.363l10.791 7.836-4.123 12.683 10.791-7.836 10.784 7.836-4.122-12.683 10.791-7.836zM47.577 219.08l-4.117-12.683-4.123 12.683H26.001l10.791 7.836-4.123 12.683 10.791-7.836 10.785 7.836-4.122-12.683 10.789-7.836zM43.46 160.624l-4.123 12.684H26.001l10.791 7.835-4.123 12.683 10.791-7.835 10.785 7.835-4.122-12.683 10.789-7.835H47.577zM99.822 114.85l-4.123 12.685H82.363l10.791 7.836-4.123 12.683 10.791-7.836 10.784 7.836-4.122-12.683 10.791-7.836h-13.337zM43.46 114.85l-4.123 12.685H26.001l10.791 7.836-4.123 12.683 10.791-7.836 10.785 7.836-4.122-12.683 10.789-7.836H47.577zM156.183 160.624l-4.122 12.684h-13.336l10.79 7.835-4.121 12.683 10.789-7.835 10.786 7.835-4.123-12.683 10.791-7.835h-13.336zM160.301 219.08l-4.118-12.683-4.122 12.683h-13.336l10.79 7.836-4.121 12.683 10.789-7.836 10.786 7.836-4.123-12.683 10.791-7.836zM216.663 219.08l-4.117-12.683-4.123 12.683h-13.335l10.789 7.836-4.122 12.683 10.791-7.836 10.785 7.836-4.123-12.683 10.791-7.836zM212.546 160.624l-4.123 12.684h-13.335l10.789 7.835-4.122 12.683 10.791-7.835 10.785 7.835-4.123-12.683 10.791-7.835h-13.336zM156.183 114.85l-4.122 12.685h-13.336l10.79 7.836-4.121 12.683 10.789-7.836 10.786 7.836-4.123-12.683 10.791-7.836h-13.336zM212.546 114.85l-4.123 12.685h-13.335l10.789 7.836-4.122 12.683 10.791-7.836 10.785 7.836-4.123-12.683 10.791-7.836h-13.336z"
                />
              </svg>
            </Link>
          </div>
        )}
        <div className="follow flex flex-col items-start justify-between">
          <div>
            <h2 className="heading text-lg">Follow Us</h2>
            <div className="socials flex items-center">
              <div className="social flex items-center justify-center">
                <Link
                  to="/"
                  className="w-full h-full flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </div>
              <div className="social flex items-center justify-center">
                <Link
                  to="/"
                  className="w-full h-full flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </div>
              <div className="social flex items-center justify-center">
                <Link
                  to="/"
                  className="w-full h-full flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </div>
              <div className="social flex items-center justify-center">
                <Link
                  to="/"
                  className="w-full h-full flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
              </div>
              <div className="social flex items-center justify-center">
                <Link
                  to="/"
                  className="w-full h-full flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="popular flex flex-col items-center">
          <div>
            <h2 className="heading w-full text-lg">Poplular Games</h2>
            <ul className="footer-list">
              <Link to="/">
                <li>
                  Call of Duty
                  <FontAwesomeIcon
                    className="up-from-square"
                    icon={faUpRightFromSquare}
                  />
                </li>
              </Link>
              <Link to="/">
                <li>
                  Tony Hawk Pro Skater
                  <FontAwesomeIcon
                    className="up-from-square"
                    icon={faUpRightFromSquare}
                  />
                </li>
              </Link>
              <Link to="/">
                <li>
                  Crash Bandicoot
                  <FontAwesomeIcon
                    className="up-from-square"
                    icon={faUpRightFromSquare}
                  />
                </li>
              </Link>
              <Link to="/">
                <li>
                  Spyro
                  <FontAwesomeIcon
                    className="up-from-square"
                    icon={faUpRightFromSquare}
                  />
                </li>
              </Link>
              <Link to="/">
                <li>
                  Sekiro
                  <FontAwesomeIcon
                    className="up-from-square"
                    icon={faUpRightFromSquare}
                  />
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="company flex flex-col items-center">
          <div>
            <h2 className="heading w-full text-lg">Company</h2>
            <ul className="footer-list">
              <Link to="/">
                <li>
                  Press
                  <FontAwesomeIcon
                    className="up-from-square"
                    icon={faUpRightFromSquare}
                  />
                </li>
              </Link>
              <Link to="/">
                <li>
                  Research
                  <FontAwesomeIcon
                    className="up-from-square"
                    icon={faUpRightFromSquare}
                  />
                </li>
              </Link>
              <Link to="/">
                <li>
                  Activision Blizzard
                  <FontAwesomeIcon
                    className="up-from-square"
                    icon={faUpRightFromSquare}
                  />
                </li>
              </Link>
              <Link to="/">
                <li>
                  Contact Us
                  <FontAwesomeIcon
                    className="up-from-square"
                    icon={faUpRightFromSquare}
                  />
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="legal flex flex-col items-center">
          <div>
            <h2 className="heading w-full text-lg">Legal</h2>
            <ul className="footer-list">
              <Link to="/">
                <li>
                  Terms of Use
                  <FontAwesomeIcon
                    className="up-from-square"
                    icon={faUpRightFromSquare}
                  />
                </li>
              </Link>
              <Link to="/">
                <li>
                  Privacy Policy
                  <FontAwesomeIcon
                    className="up-from-square"
                    icon={faUpRightFromSquare}
                  />
                </li>
              </Link>
              <Link to="/">
                <li>
                  Cookie Policy
                  <FontAwesomeIcon
                    className="up-from-square"
                    icon={faUpRightFromSquare}
                  />
                </li>
              </Link>
              <Link to="/">
                <li>
                  Cookie Sattings
                  <FontAwesomeIcon
                    className="up-from-square"
                    icon={faUpRightFromSquare}
                  />
                </li>
              </Link>
              <Link to="/">
                <li>
                  Online Safety
                  <FontAwesomeIcon
                    className="up-from-square"
                    icon={faUpRightFromSquare}
                  />
                </li>
              </Link>
              <Link to="/">
                <li>
                  Applicant Privacy Policy
                  <FontAwesomeIcon
                    className="up-from-square"
                    icon={faUpRightFromSquare}
                  />
                </li>
              </Link>
            </ul>
          </div>
        </div>
        {width > 1024 && (
          <div className="back-to-top flex items-start">
            <button className="to-top-btn flex-col" onClick={handleScrollToTop}>
              <span className="flex items-center justify-center">
                <ArrowUpIcon />
              </span>
              <span>Back To Top</span>
            </button>
          </div>
        )}
        <div className="esrb flex">
          <img src={esrbImage} alt="esrb" />
          <img src={esrbUpdatedImage} alt="esrb_update" />
        </div>
        {width > 1024 && (
          <div className="flag-en flex justify-center">
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#f0f0f0" d="M0 85.331h512v341.337H0z" />
                <path
                  fill="#d80027"
                  d="M0 127.994h512v42.663H0zM0 213.331h512v42.663H0zM0 298.657h512v42.663H0zM0 383.994h512v42.663H0z"
                />
                <path fill="#2e52b2" d="M0 85.331h256v183.797H0z" />
                <path
                  fill="#f0f0f0"
                  d="m99.822 160.624-4.123 12.684H82.363l10.791 7.835-4.123 12.683 10.791-7.835 10.784 7.835-4.122-12.683 10.791-7.835h-13.337zM103.938 219.08l-4.116-12.683-4.123 12.683H82.363l10.791 7.836-4.123 12.683 10.791-7.836 10.784 7.836-4.122-12.683 10.791-7.836zM47.577 219.08l-4.117-12.683-4.123 12.683H26.001l10.791 7.836-4.123 12.683 10.791-7.836 10.785 7.836-4.122-12.683 10.789-7.836zM43.46 160.624l-4.123 12.684H26.001l10.791 7.835-4.123 12.683 10.791-7.835 10.785 7.835-4.122-12.683 10.789-7.835H47.577zM99.822 114.85l-4.123 12.685H82.363l10.791 7.836-4.123 12.683 10.791-7.836 10.784 7.836-4.122-12.683 10.791-7.836h-13.337zM43.46 114.85l-4.123 12.685H26.001l10.791 7.836-4.123 12.683 10.791-7.836 10.785 7.836-4.122-12.683 10.789-7.836H47.577zM156.183 160.624l-4.122 12.684h-13.336l10.79 7.835-4.121 12.683 10.789-7.835 10.786 7.835-4.123-12.683 10.791-7.835h-13.336zM160.301 219.08l-4.118-12.683-4.122 12.683h-13.336l10.79 7.836-4.121 12.683 10.789-7.836 10.786 7.836-4.123-12.683 10.791-7.836zM216.663 219.08l-4.117-12.683-4.123 12.683h-13.335l10.789 7.836-4.122 12.683 10.791-7.836 10.785 7.836-4.123-12.683 10.791-7.836zM212.546 160.624l-4.123 12.684h-13.335l10.789 7.835-4.122 12.683 10.791-7.835 10.785 7.835-4.123-12.683 10.791-7.835h-13.336zM156.183 114.85l-4.122 12.685h-13.336l10.79 7.836-4.121 12.683 10.789-7.836 10.786 7.836-4.123-12.683 10.791-7.836h-13.336zM212.546 114.85l-4.123 12.685h-13.335l10.789 7.836-4.122 12.683 10.791-7.836 10.785 7.836-4.123-12.683 10.791-7.836h-13.336z"
                />
              </svg>
            </Link>
          </div>
        )}
        <div className="logo flex flex-col items-center">
          <Logo />
          <p className="copyright text-sm">
            Copyright 2022 Activision Publishing, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
