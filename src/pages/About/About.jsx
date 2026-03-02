import "../About/about.css";
import { manufacturingData, frontendData, playerData } from "../Data/aboutData";
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

function AboutList({ videoSrc }) {
  // const [showVideo, setShowVideo] = useState(false);

  const [selectedId, setSelectedId] = useState(null);
  const selectedPlayer = playerData.find((item) => item.id === selectedId);

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
                  onClick={() => setSelectedId(item.id)}
                  key={item.program}
                  {...item}
                  // program={item.program}
                  // programIcon={item.programIcon}
                  // shortInfo={item.shortInfo}
                />
              ))}
            </div>
          </div>
          <div className="frontendContainer">
            <h2>Frontend</h2>
            <div className="cardsGrid">
              {frontendData.map((item) => (
                <AboutItem
                  onClick={() => setSelectedId(item.id)}
                  key={item.program}
                  {...item}
                  // program={item.program}
                  // programIcon={item.programIcon}
                  // shortInfo={item.shortInfo}
                />
              ))}
            </div>
          </div>
        </div>
        {selectedId && (
          <div className="bottomSection">
            <div className="detailsPanel">
              <header className="detailsHeader">
                <div className="detailsHeaderLeft">
                  <img src={`/${selectedPlayer.iconSrc}`} alt="icon" />
                  <h3>{selectedPlayer.name}</h3>
                </div>
                <div className="detailsHeaderRight">
                  <button
                    onClick={() => setSelectedId(null)}
                    className="detailsCloseBtn"
                  >
                    x
                  </button>
                </div>
              </header>
              <div className="detailsSummary">
                <ul>
                  {selectedPlayer.bullets.map((bullet) => (
                    <li>{bullet}</li>
                  ))}
                </ul>
              </div>
              <video
                src={selectedPlayer.videoSrc}
                className="detailsPlayer"
                controls
              ></video>
              <footer className="detailsTools">
                <h4>Tools</h4>
                <ul className="detailsToolsList">
                  {selectedPlayer.tools.map((tool) => (
                    <li>{tool}</li>
                  ))}
                  <li className="detailToolsBadge">
                    {/* <img src="" alt="Img" />
                    <span>Catia</span> */}
                  </li>
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
