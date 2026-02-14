import "./BeforeAfter.css";
import { nestingData } from "../Data/NestingData";

function NestingCase() {
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
      <>
        <div className="nestingContainer">
          <img
            className="nestingImage"
            src={`/${nestingData.optimizedNesting.nestingLayout_1}`}
            alt=""
          />
          <img
            className="nestingImage"
            src={`/${nestingData.optimizedNesting.nestingLayout_2}`}
            alt=""
          />
        </div>
        <div className="secondRow">
          <img
            className="productionImage"
            src={`/${nestingData.optimizedNesting.manufacturedPart_1}`}
            alt=""
          />
          <img
            className="productionImage"
            src={`/${nestingData.optimizedNesting.manufacturedPart_2}`}
            alt=""
          />

          <img
            className="productionImage"
            src={`/${nestingData.optimizedNesting.manufacturedPart_3}`}
            alt=""
          />
        </div>
        <div className="thirdRow">
          <img
            src={`/${nestingData.optimizedNesting.manufacturedPart_4}`}
            alt=""
          />
          <img
            src={`/${nestingData.optimizedNesting.manufacturedPart_5}`}
            alt=""
          />
        </div>
      </>
    </>
  );
}

export default NestingCase;
