import "../Home/Home.css";
import homeImage from "../../assets/ME_NEW.jpg";

function Home() {
  return (
    <div className="general">
      <h1>Portfolio webside</h1>
      <div className="contentContainer">
        <section className="image_container">
          <img
            src={homeImage}
            alt="Kamil Gadzicki, Production Engineer"
            className="image_home"
          />
        </section>

        <section className="titleContainer">
          <h3>Hello, My name is</h3>
          <h1>Kamil Gadzicki</h1>
          <h2>Production Engineer</h2>
          <div className="downloadBottom">
            <a href="" className="btn btn-primary btn-lg">
              Download CV (PL)
            </a>
            <a href="" className="btn btn-secondary btn-lg">
              Download CV in (ENG)
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
