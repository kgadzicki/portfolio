import "../About/about.css";
import { manufacturingData, frontendData } from "../Data/aboutData";

function AboutItem({ program, programIcon, shortInfo }) {
  return (
    <div className="all">
      <div className="imgContainer">
        <img src={`/${programIcon}`} alt="" />
      </div>
      <div className="titleContainer">
        <h3>{program}</h3>
        <p>{shortInfo}</p>
      </div>
    </div>
  );
}

function AboutList() {
  return (
    <>
      <div className="aboutContainer">
        <div className="topSection">
          {/* <h1>My toolkit across industries</h1> */}

          <div className="manufacturingContainer">
            <h2>Manufacturing/CNC</h2>
            <div className="cardsGrid">
              {manufacturingData.map((item, index) => (
                <AboutItem
                  key={index}
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
              {frontendData.map((item, index) => (
                <AboutItem
                  key={index}
                  program={item.program}
                  programIcon={item.programIcon}
                  shortInfo={item.shortInfo}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="bottomSection">
          <div className="video"></div>
        </div>
      </div>
    </>
  );
}

export default AboutList;
