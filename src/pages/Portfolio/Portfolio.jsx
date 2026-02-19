import "../Portfolio/portfolio.css";
import honeycombImage from "../../assets/core.jpg";
import compositeImage from "../../assets/composite.jpg";
import nestingImage from "../../assets/nesting.jpg";
import PortfolioCard from "../PortfolioCard/PortfolioCard.jsx";
import NestingCase from "../Compare/NestingResults.jsx";
import { honeycombData } from "../Data/HoneycombData.jsx";
import BeforeAfterList from "../Compare/BeforeAfter.jsx";
import { compositesData } from "../Data/CompositesData.jsx";
import { optimizedNesting } from "../Data/nestingData.jsx";
import { useState } from "react";

function Portfolio() {
  const [showComposite, setShowComposite] = useState(false);
  const [showNesting, setShowNesting] = useState(false);
  const [showHoneycomb, setShowHoneycomb] = useState(false);

  return (
    <div className="portfolioCss">
      <div className="portfolioImage"></div>
      <h1 className="category">Category</h1>

      <div className="categoryContainer">
        <section className="composites">
          <PortfolioCard
            image={compositeImage}
            title="Composites"
            description={
              "Practical projects focused on composite materials. Solving real technological problems from production and testing processes."
            }
          />
          <button
            className="btn btn-primary"
            onClick={() => setShowComposite(!showComposite)}
          >
            {showComposite ? "Hide Composite" : "Show Composite"}
          </button>
        </section>

        <section className="nesting">
          <PortfolioCard
            image={nestingImage}
            title="Nesting"
            description={
              "Optimization of part placement on material sheets. Reducing waste and improving production efficiency."
            }
          />
          <button
            className="btn btn-primary"
            onClick={() => setShowNesting(!showNesting)}
          >
            {showNesting ? "Hide Nesting" : "Show Nesting"}
          </button>
        </section>
        <section className="honeycomb">
          <PortfolioCard
            image={honeycombImage}
            title="Honeycomb"
            description={
              "Work with honeycomb-based structures. Analyzing and solving quality issues in manufacturing."
            }
          />
          <button
            className="btn btn-primary"
            onClick={() => setShowHoneycomb(!showHoneycomb)}
          >
            {showHoneycomb ? "Hide Honeycomb" : "Show Honeycomb"}
          </button>
        </section>
      </div>
      {showComposite && <BeforeAfterList items={compositesData} />}
      {showNesting && <NestingCase items={optimizedNesting} />}
      {showHoneycomb && <BeforeAfterList items={honeycombData} />}
    </div>
  );
}

export default Portfolio;
