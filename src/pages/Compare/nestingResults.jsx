import "./BeforeAfter.css";
import { nestingData } from "../Data/NestingData";

function NestingCase() {
  return (
    <>
      <div className="caseStudy">
        <h3>{nestingData.meta.title_1}</h3>
        <p>{nestingData.meta.text_1}</p>
        <h3>{nestingData.meta.title_2}</h3>
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
        <h3>{nestingData.meta.title_7}</h3>
        <p>{nestingData.meta.text_7}</p>
      </div>
    </>
  );
}

export default NestingCase;
