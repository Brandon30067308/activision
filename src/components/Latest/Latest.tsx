import { FC, Fragment, useState } from "react";
import activisionLogo from "../../assets/images/activision_logo_white.png";
import codmLogo from "../../assets/images/codm_logo.svg";
import cbLogo from "../../assets/images/cb-iat4-logo.png";
import thPSLogo from "../../assets/images/T_H-PS1+2-logo.png";
import betaTimesMWArticleImage from "../../assets/images/MWII-004-NEXT-TOUT.jpg";
import terminatorModelsArticleImage from "../../assets/images/VGD-TERMINATOR-BUNDLES-TOUT.jpg";
import codRebirthGuideArticleImage from "../../assets/images/VGD-WZ-MOF-REBIRTH-OF-THE-DEAD-TOUT.jpg";
import ghostInTheShellArticleImage from "../../assets/images/CODM-SEASON-7-ANNOUNCEMENT-TOUT.jpg";
import vanguardMapGuideArticleImage from "../../assets/images/VGD-DESOLATION-MAP-TOUT.jpg";
import merceneriesOfFortuneArticleImage from "../../assets/images/VGD-MERCENARIES-OF-FORTUNE-RELOADED-ANNOUNCE-TOUT.jpg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import breakpoints from "../../breakpoints";

const latestArticles: Array<{
  image: string;
  title: string;
  summary: string;
  date: string;
}> = [
  {
    image: betaTimesMWArticleImage,
    title:
      "Announcing Open Beta times for Modern Warfare® II and the Call of Duty®: Next event",
    summary:
      "Mark your calendars for September 15: The future of Call of Duty® will be revealed at Call of Duty: Next, a Franchise Showcase Event. Then clear your schedule for September 16–-26: Detailed Beta dates and timing is locked and loaded. Here are the dates you need to know, and what to expect:",
    date: "Aug 07, 2022",
  },
  {
    image: terminatorModelsArticleImage,
    title:
      "Introducing Terminator Models T-800 and T-1000 — Available for a Limited Time",
    summary:
      "Part man, part machine — during the month of August, get the T-800 and T-1000 Terminator models in two limited-time Ultra Operator Bundles for use in Call of Duty®: Vanguard and Call of Duty®: Warzone™",
    date: "Jul 28, 2022",
  },
  {
    image: codRebirthGuideArticleImage,
    title: "Call of Duty®: Warzone™ Rebirth of the Dead Guide",
    summary:
      "Rebirth Island is overrun by both the living and the undead during an infiltration under dangerous weather conditions. These are the tactics you need to survive Rebirth of the Dead.™",
    date: "Jul 26, 2022",
  },
  {
    image: ghostInTheShellArticleImage,
    title:
      "GHOST IN THE SHELL: SAC_2045 Comes to Call of Duty®: Mobile in Season 7 — New Vision City",
    summary:
      "Join Motoko and defeat the post-humans in a massive collaboration between Call of Duty®: Mobile and GHOST IN THE SHELL: SAC_2045. Tour a new region on Isolated called New Vision City, install Cyberware enhancements, and complete the themed event for major rewards and more in Season 7: New Vision City.",
    date: "Jul 25, 2022",
  },
  {
    image: vanguardMapGuideArticleImage,
    title: "Call of Duty®: Vanguard Desolation Map Guide",
    summary:
      "Home to a crash site and an invaluable listening post, Desolation takes Operators to a mountainous village in the Pacific where close-quarters combat reigns. Read on for a map overview and tips for navigating the treacherous environment, going live alongside Mercenaries of Fortune Reloaded on July 27.",
    date: "Jul 22, 2022",
  },
  {
    image: merceneriesOfFortuneArticleImage,
    title:
      "Mercenaries of Fortune —Mid-Season Update Features The Terminator in Warzone and Vanguard",
    summary:
      "“Come with me if you want to live!” The T-800 and T-1000 from Terminator 2: Judgment Day arrive in time for Titanium Trials and Rebirth of the Dead in Warzone, as well as a new content drop Vanguard.",
    date: "Jul 20, 2022",
  },
];

const Latest: FC = () => {
  const { width } = useWindowDimensions();
  const [navItems] = useState<Array<string | string[]>>([
    "all-news",
    ["activision", activisionLogo],
    ["codm", codmLogo],
    ["cb", cbLogo],
    ["thPS", thPSLogo],
  ]);
  const [selected, setSelected] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const selectedNavItem = navItems.find((_, i) => i === selected);

  return (
    <div className="Latest w-full flex justify-center">
      <div className="container flex flex-col justify-start items-center">
        <h2 className="heading text-4xl">Latest New {"&"} Articles</h2>
        <div
          className={`navigation ${
            navOpen ? "open" : ""
          } w-full flex flex-col justify-center`}
        >
          {width > breakpoints.md ? (
            <div className="w-full flex items-center justify-between">
              {navItems.map((item, i) => (
                <div
                  key={`l-n-i-${i}`}
                  className={`nav-item flex items-center ${
                    selected === i ? "selected" : ""
                  }`}
                  onClick={() => {
                    setSelected(i);
                  }}
                >
                  {typeof item === "string" ? (
                    <p className="text-lg">{item.replace("-", " ")}</p>
                  ) : (
                    <img src={item[1]} alt={item[0]} />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="navigation-mobile w-full flex items-center justify-center">
              <div
                className="selected flex justify-center items-center"
                onClick={() => setNavOpen(!navOpen)}
              >
                {typeof selectedNavItem === "string" ? (
                  <p className="text-lg">{selectedNavItem.replace("-", " ")}</p>
                ) : (
                  <img src={selectedNavItem?.[1]} alt="nav_item_selected" />
                )}
              </div>
              <div className="nav-items">
                <ul className="w-full flex flex-col">
                  {navItems.map((item, i) =>
                    i !== selected ? (
                      <li
                        key={`n-m-i-${i}`}
                        className="nav-item w-full"
                        onClick={() => {
                          setSelected(i);
                          setNavOpen(false);
                        }}
                      >
                        {typeof item === "string" ? (
                          <p className="text-lg">{item.replace("-", " ")}</p>
                        ) : (
                          <img
                            key={`n-m-i-${i}`}
                            src={item[1]}
                            alt="nav_item"
                          />
                        )}
                      </li>
                    ) : (
                      <Fragment key={`n-m-i-${i}`} />
                    )
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="w-full latest-articles flex flex-col items-center">
          <div className="articles-container">
            {latestArticles.map((article, i) => (
              <div
                key={`a-i-${i}`}
                className="article-container w-full flex flex-col"
              >
                <div className="article-image-container w-full">
                  <img src={article.image} alt={String(article.image)} />
                </div>
                <div className="article-content flex flex-col">
                  <p className="article-date text-sm">{article.date}</p>
                  <div
                    className="flex flex-col"
                    style={{
                      overflow: "hidden",
                    }}
                  >
                    <div className="article-head">
                      <h2 className="article-heading">{article.title}</h2>
                    </div>
                    <div>
                      <div className="divide"></div>
                      <div className="article-summary">
                        <p>{article.summary}</p>
                      </div>
                    </div>
                  </div>
                  <button className="read-more-btn text-sm">READ MORE</button>
                </div>
              </div>
            ))}
          </div>
          <button className="view-all-btn text-base">View All</button>
        </div>
      </div>
    </div>
  );
};

export default Latest;
