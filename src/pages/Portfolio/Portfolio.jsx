import "../Portfolio/Portfolio.css";
import honeybombImage from "../../assets/core.jpg";
import compositeImage from "../../assets/composite.jpg";
import nestingImage from "../../assets/nesting.jpg";

function Portfolio() {
  return (
    <div className="portfolioCss">
      <div className="portfolioImage"></div>
      <h1 className="category">Category</h1>

      <div className="categoryContainer">
        <section className="composites">
          <img src={compositeImage} className="imageComposites"></img>
          <h3 className="title">Composites</h3>
          <p>
            Practical projects focused on composite materials. Solving real
            technological problems from production and testing processes.
          </p>
          <button className="btn btn-primary">View projects</button>
        </section>
        <section className="nesting">
          <img src={nestingImage} className="imageNesting"></img>
          <h3 className="title">Nesting</h3>
          <p>
            Optimization of part placement on material sheets. Reducing waste
            and improving production efficiency.
          </p>
          <button className="btn btn-primary">View projects</button>
        </section>
        <section className="honeycomb">
          <img src={honeybombImage} className="imageHoneycomb"></img>
          <h3 className="title">Honeycomb</h3>
          <p>
            Work with honeycomb-based structures. Analyzing and solving quality
            issues in manufacturing.
          </p>
          <button className="btn btn-primary">View projects</button>
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
