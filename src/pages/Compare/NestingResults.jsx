import "./nestingResults.css";
import { nestingData } from "../Data/nestingData";

function NestingCase({ item }) {
  return (
    <>
      <div className="caseStudy">
        <div>
          <h1>{nestingData.meta.title_1}</h1>
          <ul>
            {nestingData.meta.text_1.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <h2>{nestingData.meta.title_2}</h2>
          <p>{nestingData.meta.text_2}</p>
          <h3>{nestingData.meta.title_3}</h3>
          <p>{nestingData.meta.text_3}</p>
          <ul>
            {nestingData.meta.points_1.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p>{nestingData.meta.text_4}</p>
          <h3>{nestingData.meta.title_4}</h3>
          <p>{nestingData.meta.text_5}</p>
          <ul>
            {nestingData.meta.points_2.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <h3>{nestingData.meta.title_5}</h3>
          <p>{nestingData.meta.text_6}</p>

          <ul>
            {nestingData.meta.points_3.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <h3>{nestingData.meta.title_6}</h3>
          <ul>
            {nestingData.meta.points_4.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="chartsContainer">
          <h3>{nestingData.charts.titleDefectRate}</h3>
          <img
            className="charts"
            src={`/${nestingData.charts.defectRate}`}
            alt=""
          />
          <h3>{nestingData.charts.titleQuantity}</h3>
          <img
            className="charts"
            src={`/${nestingData.charts.quantity}`}
            alt=""
          />
        </div>

        <h3>{nestingData.meta.title_7}</h3>
        <p>{nestingData.meta.text_7}</p>
      </div>

      <h3>{item.description}</h3>
      <div className="nestingContainer">
        {item.layouts.map((src) => (
          <img className="firstRow" src={src} key={src} alt="efectImage" />
        ))}
      </div>
      <div className="secondRowContainer">
        {item.manufactured.slice(0, 3).map((src) => (
          <img className="secondRow" alt="efectImage" key={src} src={src} />
        ))}
      </div>
      <div className="thirdRowContainer">
        {item.manufactured.slice(3, 5).map((src) => (
          <img className="thirdRow" alt="efectImage" key={src} src={src} />
        ))}
      </div>
    </>
  );
}

function NestingList({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <NestingCase key={index} item={item} />
      ))}
    </div>
  );
}

export default NestingList;
