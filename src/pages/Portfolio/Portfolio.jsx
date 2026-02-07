import "../Portfolio/Portfolio.css";
import honeybombImage from "../../assets/core.jpg";
import compositeImage from "../../assets/composite.jpg";
import nestingImage from "../../assets/nesting.jpg";
import PortfolioCard from "../../PortfolioCard/PortfolioCard";
function Portfolio() {
  return (
    <div className="portfolioCss">
      <div className="portfolioImage"></div>
      <h1 className="category">Category</h1>
      {/* <PortfolioCard title="Composites" description={"lorem"} />
      <PortfolioCard title="Honeycomb" description={"work work"} /> */}

      <div className="categoryContainer">
        <section className="composites">
          <PortfolioCard
            image={compositeImage}
            title="Composites"
            description={
              "Practical projects focused on composite materials. Solving real technological problems from production and testing processes."
            }
            show="view projects"
          />
        </section>
        <section className="nesting">
          <PortfolioCard
            image={nestingImage}
            title="Nesting"
            description={
              "Optimization of part placement on material sheets. Reducing waste and improving production efficiency."
            }
            show="view projects"
          />
        </section>
        <section className="honeycomb">
          <PortfolioCard
            image={honeybombImage}
            title="Honeycomb"
            description={
              "Work with honeycomb-based structures. Analyzing and solving quality issues in manufacturing."
            }
            show="view projects"
          />
        </section>
      </div>
      <div className="categoryButton">
        <button className="btn btn-primary">All</button>
        <button className="btn btn-primary">Composites</button>
        <button className="btn btn-primary">Nesting</button>
        <button className="btn btn-primary">Heneycomb</button>
      </div>
    </div>
  );
}

export default Portfolio;
