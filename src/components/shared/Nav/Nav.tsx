import { FC, useEffect, useRef, useState } from "react";
import breakpoints from "../../../breakpoints";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import Logo from "../Logo/Logo";
import NavMobile from "./NavMobile";

const Nav: FC = () => {
  const navLinksRef = useRef<Array<string | { [key: string]: string[] }>>([
    "games",
    {
      about: [
        "about us",
        "studios and locations",
        "ratings and resources",
        "playtest",
        "diversity and inclusion",
      ],
    },
    {
      career: [
        "search jobs",
        "students",
        "military veterans",
        "veterans hiring guide",
        "faq",
      ],
    },
    { support: ["support home", "online services"] },
  ]);
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const nav = document.querySelector(".Nav");

    window.addEventListener("load", () => {
      const scrollY = window.scrollY;
      if (scrollY >= 480) {
        nav?.classList?.remove("opaque");
      } else {
        nav?.classList?.add("opaque");
      }
    });

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY >= 480) {
        nav?.classList?.remove("opaque");
      } else {
        nav?.classList?.add("opaque");
      }
    });
  }, []);

  return (
    <nav
      className={`Nav w-full flex ${
        width <= 1024 ? "justify-center" : "justify-between"
      } ${open ? "open" : ""} items-center`}
      style={
        open
          ? {
              background: "rgb(0, 0, 0)",
            }
          : {}
      }
    >
      <div className="h-full flex items-center">
        <div className="header-logo-container">
          <Logo />
        </div>
        {width <= 1024 && (
          <div
            className="mobile-burger flex flex-col justify-between"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span />
            <span />
            <span />
          </div>
        )}
        {width > breakpoints.lg && (
          <ul className="h-full flex items-center nav-links">
            {navLinksRef.current.map((link, i) => (
              <li key={`n-l-${i}`} className="nav-link flex items-center">
                {typeof link === "string" ? (
                  <a href="/">{link}</a>
                ) : (
                  <span>{Object.keys(link)[0]}</span>
                )}
                {typeof link !== "string" && (
                  <ul className="flex justify-start items-start">
                    {Object.values(link)[0].map((subLink, i) => (
                      <li key={`s-l-${i}`} className="w-full">
                        <a href="/" className="w-full">
                          {subLink}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      {width > 1024 && (
        <div className="header-btns-container flex items-center">
          <button className="signup-btn">SIGN UP</button>
          <button className="login-btn">LOGIN</button>
        </div>
      )}
      {width <= 1024 && (
        <NavMobile
          open={open}
          setOpen={setOpen}
          navLinks={navLinksRef.current}
        />
      )}
    </nav>
  );
};

export default Nav;
