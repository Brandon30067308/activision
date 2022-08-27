import { Dispatch, FC, useState } from "react";

interface NavMobileProps {
  open: boolean;
  setOpen: Dispatch<boolean>;
  navLinks: Array<string | { [key: string]: string[] }>;
}

const NavMobile: FC<NavMobileProps> = ({ open, setOpen, navLinks }) => {
  const [subOpen, setSubOpen] = useState(
    new Array(navLinks.filter((link) => typeof link !== "string").length).fill(
      false
    )
  );

  return (
    <div className="NavMobile w-full">
      <div className="nav-mobile-content w-full">
        <ul className="w-full flex flex-col">
          {navLinks.map((link, i) => {
            const open = subOpen.find((_, pi) => pi === i - 1);

            return typeof link === "string" ? (
              <li key={`n-m-i-${i}`} className="nav-item text-base">
                <a href="/">{link}</a>
              </li>
            ) : (
              <li
                key={`n-m-i-${i}`}
                className={`nav-item ${open ? "open" : ""} text-base`}
              >
                <span
                  className="contain"
                  onClick={() => {
                    setSubOpen((prev) =>
                      prev.map((v, pi) => (pi === i - 1 ? !v : v))
                    );
                  }}
                >
                  {Object.keys(link)[0]}
                </span>
                <div
                  className="sub-links flex flex-col"
                  style={{
                    display: subOpen[i - 1] ? "flex" : "none",
                  }}
                >
                  {Object.values(link)[0].map((v, j) => (
                    <a
                      href="/"
                      key={`n-m-s-i-${i}-${j}`}
                      className="sub-link text-sm"
                    >
                      {v}
                    </a>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="nav-mobile-bg"></div>
    </div>
  );
};

export default NavMobile;
