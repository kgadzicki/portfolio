import "./BeforeAfter.css";
import { nestingData } from "../Data/NestingData";

function NestingCase({ before, after }) {
  return (
    <>
      <div className="caseStudy">
        <h2>Part 3: Nesting-related projects</h2>
        <h2>
          <strong>🛠️ Case Study </strong>
        </h2>
        <br />
        Optimization of Honeycomb Filler Part Production under Crisis Conditions
        Position: Process Engineer – Programmer Project Duration: 12 weeks
        Industry: Industrial Manufacturing (CNC, Aerospace / Composites)
        <br></br>
        Technologies: CATIA, CNC programming, steel templates, manual cutting,
        nesting, quality analysis
        <br />
        <h3>🔍 Challenge Background</h3> Due to a sudden surge in demand from a
        key client, the company faced significant production challenges:
        <ul>
          <li>High defect rate (14.9%),</li>
          <li>Limited number of CNC machines and operators,</li>
          <li>Most programs prepared for single-piece production,</li>
          <li>High employee turnover,</li>
          <li>Increasing time and cost pressure.</li>
        </ul>
        The goal was to quickly develop and implement a strategy that would
        significantly increase production capacity while simultaneously reducing
        material waste.
        <br />
        <h3>
          <strong>🧠 Practical Knowledge as the Key to Succes</strong>
        </h3>
        My experience as a CNC operator played a crucial role in the success of
        this project:
        <br />
        <br />
        <ul>
          <li>
            Familiarity with all available types of honeycomb fillers – both
            Nomex and aluminum, with various thicknesses and densities – allowed
            me to quickly assess the feasibility of serial production for
            individual parts.
          </li>
          <li>
            Excellent understanding of CNC machine capabilities and limitations
            (tools, cutting strategies, repeatability, work ergonomics) enabled
            realistic adaptation of production programs to the operational
            capabilities of the plant.
          </li>
        </ul>
        <h3>🔧 Stages of Actions and Optimization</h3>
        <ul>
          <li>Number of phases (single-phase/two-phase),</li>
          <li>Potential for serial production,</li>
          <li>Types of materials used,</li>
          <li>Possibility of manual or automated processing.</li>
          <li>
            Identification of parts suitable for production using steel
            templates (manual cutting method).
          </li>
          <li>Some templates were obtained directly from the client,</li>
          <li>
            The remaining templates were designed and manufactured internally
            based on my geometric and dimensional analyses.
          </li>
          <li>
            Exclusion of parts requiring exclusively single-piece approaches –
            their production was postponed or reduced.
          </li>
        </ul>
        <h3>Development of over 100 new CNC programs:</h3>
        <ul>
          <li>Optimized for a single honeycomb filler block,</li>
          <li>Matched to the specific machine park and operator skills,</li>
          <li>Easy to implement and resistant to human errors.</li>
        </ul>
        <h3>📊 Results-Data Confirmed</h3>
        <h2>tabelka do dodania</h2>
      </div>
      <div className="beforeSide">
        {/* <h3>Concept</h3> */}
        <h3>
          📎 Attached Charts:
          <br />
          <br />
          📉 Weekly defect rate – drastic reduction over 12 weeks
          <br />
        </h3>
        <img
          src={`/${before.detailPhoto}`}
          alt="Image"
          className="detailImage"
        />
      </div>
      <div className="afterSide">
        <h3>
          📈 Weekly production – number of conforming parts and defects – volume
          increase with stable quality
        </h3>
        <img
          src={`/${after.detailPhoto}`}
          alt="Image"
          className="detailImage"
        />
        <h3>📘 Side Effects – Knowledge and Development</h3>
        Consolidation of practical knowledge about honeycomb filler machining,
        their technological properties, and optimization possibilities Advanced
        development of CNC programming skills for serial and repeatable
        production Strengthening analytical skills and implementing solutions in
        production conditions Ability to react quickly under time and resource
        pressure.
      </div>
    </>
  );
}

function NestingSection() {
  return (
    <div>
      {nestingData.map((item, index) => (
        <NestingCase key={index} before={item.before} after={item.after} />
      ))}
    </div>
  );
}

export default NestingSection;
