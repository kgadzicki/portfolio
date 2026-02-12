function BeforeAfterItem({ before, after }) {
  return (
    <>
      <div className="beforeSide">
        <h3>Before</h3>
        <img
          src={`/${before.detailPhoto}`}
          alt="Image"
          className="detailImage"
        />
        <div className="parameters">
          {before.situationOverview && (
            <p>
              <strong>Situation Overview:</strong> {before.situationOverview}
            </p>
          )}
          {before.problemDescription && (
            <p>
              <strong>Problem Identification:</strong>{" "}
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
              <strong>Corrective Actions:</strong> {after.correctiveActions}
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

function BeforeAfterList({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <BeforeAfterItem key={index} before={item.before} after={item.after} />
      ))}
    </div>
  );
}

export default BeforeAfterList;
