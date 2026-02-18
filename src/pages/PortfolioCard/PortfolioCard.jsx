import "../PortfolioCard/portfolioCard.css";

function PortfolioCard({ image, title, description, buttonLabel }) {
  return (
    <div className="portfolioCard">
      <img className="portfolioCardImage" src={image} alt={title}></img>
      <h3 className="portfolioCardTitle">{title}</h3>
      <p className="portfolioCardDescrption">{description}</p>
      {/* <button className="btn btn-primary">{buttonLabel}</button> */}
    </div>
  );
}

export default PortfolioCard;
