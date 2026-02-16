import "./nestingResults.css";
import { nestingData } from "../Data/nestingData";

function NestingCase({
  description,
  nestingLayout_1,
  nestingLayout_2,
  manufacturedPart_1,
  manufacturedPart_2,
  manufacturedPart_3,
  manufacturedPart_4,
  manufacturedPart_5,
}) {
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

      <h3>{description}</h3>
      <div className="nestingContainer">
        <img className="firstRow" src={nestingLayout_1} alt="" />
        <img className="firstRow" src={nestingLayout_2} alt="" />
      </div>
      <div className="secondRowContainer">
        <img className="secondRow" src={manufacturedPart_1} alt="" />
        <img className="secondRow" src={manufacturedPart_2} alt="" />
        <img className="secondRow" src={manufacturedPart_3} alt="" />
      </div>
      <div className="thirdRowContainer">
        <img className="thirdRow" src={manufacturedPart_4} alt="" />
        <img className="thirdRow" src={manufacturedPart_5} alt="" />
      </div>
    </>
  );
}

function NestingList({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <NestingCase
          key={index}
          description={item.description}
          nestingLayout_1={item.nestingLayout_1}
          nestingLayout_2={item.nestingLayout_2}
          manufacturedPart_1={item.manufacturedPart_1}
          manufacturedPart_2={item.manufacturedPart_2}
          manufacturedPart_3={item.manufacturedPart_3}
          manufacturedPart_4={item.manufacturedPart_4}
          manufacturedPart_5={item.manufacturedPart_5}
        />
      ))}
    </div>
  );
}

export default NestingList;
