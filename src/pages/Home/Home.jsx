import "../Home/home.css";

function Home() {
  return (
    <>
      <div className="container">
        <section className="imageContainer"></section>
        <section className="text">
          <h3>Hello, My name is</h3>
          <h1>Kamil Gadzicki</h1>
          <h2>Production Engineer</h2>
          <div className="downloadBottom">
            <a href="" className="btn btn-primary">
              Download CV (PL)
            </a>
            <a href="" className="btn btn-secondary">
              Download CV in (ENG)
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
