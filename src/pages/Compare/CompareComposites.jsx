import { compositeItems } from "../Data/CompositesData.jsx";
import "./BeforeAfter.css";

function CompareComposites({ before, after }) {
  return (
    <>
      <div className="beforeSide">
        <h3>Before</h3>
        <img src={`/${before.detailPhoto}`} alt="" className="detailImage" />
        <div className="parameters">
          {before.situationOverview && (
            <p>
              <strong>Situation Overview:</strong> {before.situationOverview}
            </p>
          )}
          {before.problemDescription && (
            <p>
              <strong>Problem Identification: </strong>{" "}
              {before.problemDescription}
            </p>
          )}
        </div>
      </div>
      <div className="afterSide">
        <h3>After</h3>
        <img
          src={`/${after.detailPhoto}`}
          alt="Image"
          className="detailImage"
        />
        <div className="parameters">
          {after.correctiveActions && (
            <p>
              <strong>Corrective Actions</strong> {after.correctiveActions}
            </p>
          )}
          {after.results && (
            <p>
              <strong>Results:</strong> {after.results}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

function CompositesSection() {
  return (
    <div>
      {compositeItems.map((item, index) => (
        <CompareComposites
          key={index}
          before={item.before}
          after={item.after}
        />
      ))}
    </div>
  );
}

export default CompositesSection;
