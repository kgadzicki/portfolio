import "../pages/Portfolio/Portfolio.css";

function PortfolioCard({ image, title, description, show }) {
  return (
    <div>
      <img className="imageComposites" src={image}></img>
      <h3 className="title">{title}</h3>
      <p>{description}</p>
      <button className="btn btn-primary">{show}</button>
    </div>
  );
}

export default PortfolioCard;
