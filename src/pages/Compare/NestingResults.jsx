import "./nestingResults.css";
import { nestingData } from "../Data/nestingData";

function NestingCase({ item }) {
  return (
    <>
      <div className="caseStudy">
        <div>
          <h1>{nestingData.meta.introTitle}</h1>
          <ul>
            {nestingData.meta.introHighlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <h2>{nestingData.meta.backgroundTitle}</h2>
          <p>{nestingData.meta.backgroundText}</p>

          <h3>{nestingData.meta.problemTitle}</h3>
          <p>{nestingData.meta.problemDescription}</p>
          <ul>
            {nestingData.meta.problemDetails.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p>{nestingData.meta.actionsSummary}</p>
          <h3>{nestingData.meta.actionsTitle}</h3>
          <p>{nestingData.meta.actionsDescription}</p>
          <ul>
            {nestingData.meta.actionsSteps.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <h3>{nestingData.meta.resultsTitle}</h3>
          <p>{nestingData.meta.resultsDescription}</p>

          <ul>
            {nestingData.meta.resultsMetrics.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <h3>{nestingData.meta.conclusionTitle}</h3>
          <ul>
            {nestingData.meta.conclusions.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div>
          <table className="tableContainer">
            <thead>
              <tr>
                {nestingData.resultsTable.columns.map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {nestingData.resultsTable.rows.map((row) => (
                <tr key={row.metric}>
                  <td>{row.metric}</td>
                  <td>{row.week1}</td>
                  <td>{row.week12}</td>
                  <td>{row.change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="chartsContainer">
          <h3>{nestingData.charts.defectTitle}</h3>
          <img
            className="charts"
            src={`/${nestingData.charts.defectRate}`}
            alt="Chart Defect Rate"
          />
          <h3>{nestingData.charts.quantityTitle}</h3>
          <img
            className="charts"
            src={`/${nestingData.charts.quantityImage}`}
            alt="Chart Quantity"
          />
        </div>

        <h3>{nestingData.meta.summaryTitle}</h3>
        <p>{nestingData.meta.summaryText}</p>
      </div>

      <h3>{item.description}</h3>
      <div className="nestingContainer">
        {item.layouts.map((src) => (
          <img
            className="firstRow"
            src={`/${src}`}
            key={src}
            alt="Nesting layout"
          />
        ))}
      </div>
      <div className="secondRowContainer">
        {item.manufactured.slice(0, 3).map((src) => (
          <img
            className="secondRow"
            alt="Manufactured part"
            key={src}
            src={`/${src}`}
          />
        ))}
      </div>
      <div className="thirdRowContainer">
        {item.manufactured.slice(3, 5).map((src) => (
          <img
            className="thirdRow"
            alt="Manufactured part"
            key={src}
            src={`/${src}`}
          />
        ))}
      </div>
    </>
  );
}

function NestingList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <NestingCase key={item.description} item={item} />
      ))}
    </div>
  );
}

export default NestingList;
