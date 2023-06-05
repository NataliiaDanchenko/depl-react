import "./PortfolioCardPopUp.css";

const PortfolioCardPopUp = (props) => {
  return (
      <div>
          <div className="popup">
              <span>&times;</span>
              <img src={props.portfolioCard.img}/>
          </div>
      </div>
  )
}

export default PortfolioCardPopUp;