import '../Home/Home.css'



function Home () {
    return (
        <div className="general_CSS">
            {/* <Header/> */}
            <div className="contentContainer">
                <section className="image_container">
                    {/* <img src="" alt="Kamil Gadzicki, Production Engineer" className="image_home" /> */}
                </section>
                <div className="titleContainer">
                    <h3>Hello, My name is</h3>
                    <h1>Kamil Gadzicki</h1>
                    <h2>Production Engineer</h2>
                    <div className="downloadBottom">
                        <a href="" className="bt btn btn primary">Download CV (PL)</a>
                        <a href="" className="bt1 btn btn-primary">Download CV in (ENG)</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home