import "../Portfolio/Portfolio.css";
import honeybombImage from "../../assets/core.jpg";
import compositeImage from "../../assets/composite.jpg";
import nestingImage from "../../assets/nesting.jpg";

function Portfolio() {
  return (
    <>
      <div className="portfolioImage"></div>
      <h1 className="category">Category</h1>
      <div className="categoryContainer">
        <section className="composites">
          <img src={compositeImage} className="imageComposites"></img>
          <h3>Composites</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium debitis, temporibus sed dolorum tempore alias numquam
            doloribus porro architecto unde, perspiciatis qui nobis quas
            suscipit vel repudiandae voluptatibus? Aspernatur, est.
          </p>
          <button className="btn btn-primary">View projects</button>
        </section>
        <section className="nesting">
          <img src={nestingImage} className="imageNesting"></img>
          <h3>Nesting</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium debitis, temporibus sed dolorum tempore alias numquam
            doloribus porro architecto unde, perspiciatis qui nobis quas
            suscipit vel repudiandae voluptatibus? Aspernatur, est.
          </p>
          <button className="btn btn-primary">View projects</button>
        </section>
        <section className="honeycomb">
          <img src={honeybombImage} className="imageHoneycomb"></img>
          <h3>Honeycomb</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium debitis, temporibus sed dolorum tempore alias numquam
            doloribus porro architecto unde, perspiciatis qui nobis quas
            suscipit vel repudiandae voluptatibus? Aspernatur, est.
          </p>
          <button className="btn btn-primary">View projects</button>
        </section>
      </div>
    </>
  );
}

export default Portfolio;
