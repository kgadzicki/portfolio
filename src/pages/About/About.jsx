import "../About/about.css";
import { manufacturingData, frontendData } from "../Data/aboutData";
import { useState } from "react";

function AboutItem({ program, programIcon, shortInfo, onClick }) {
  return (
    <div className="toolkitCard" onClick={onClick}>
      <div className="imgContainer">
        <img src={`/${programIcon}`} alt={program} />
      </div>
      <div className="titleContainer">
        <h3>{program}</h3>
        <p>{shortInfo}</p>
      </div>
    </div>
  );
}

function AboutList() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className="aboutContainer">
        <div className="topSection">
          {/* <h1>My toolkit across industries</h1> */}

          <div className="manufacturingContainer">
            <h2>Manufacturing/CNC</h2>
            <div className="cardsGrid">
              {manufacturingData.map((item) => (
                <AboutItem
                  onClick={() => setShowVideo((prev) => !prev)}
                  key={item.program}
                  program={item.program}
                  programIcon={item.programIcon}
                  shortInfo={item.shortInfo}
                />
              ))}
            </div>
          </div>
          <div className="frontendContainer">
            <h2>Frontend</h2>
            <div className="cardsGrid">
              {frontendData.map((item) => (
                <AboutItem
                  onClick={() => setShowVideo((prev) => !prev)}
                  key={item.program}
                  program={item.program}
                  programIcon={item.programIcon}
                  shortInfo={item.shortInfo}
                />
              ))}
            </div>
          </div>
        </div>
        {showVideo && (
          <div className="bottomSection">
            <div className="detailsPanel">
              <header className="detailsHeader">
                <div className="detailsHeaderLeft">
                  <img src="" alt="icon" />
                  <h3>title</h3>
                </div>
                <div className="detailsHeaderRight">
                  <button
                    onClick={() => setShowVideo(false)}
                    className="detailsCloseBtn"
                  >
                    x
                  </button>
                </div>
              </header>
              <div className="detailsSummary">
                <ul>
                  <li>aa</li>
                  <li>aa</li>
                  <li>dd</li>
                  <li>cc</li>
                </ul>
              </div>
              <video className="detailsPlayer" controls></video>
              <footer className="detailsTools">
                <h4>ToolUsed</h4>
                <ul className="detailsToolsList">
                  <li className="detailToolsBadge">
                    <img src="" alt="Img" />
                    <span>Catia</span>
                  </li>
                  <li>5-axis CNC</li>
                  <li></li>
                  <li></li>
                </ul>
              </footer>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AboutList;
