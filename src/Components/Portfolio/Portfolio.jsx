import "./Portfolio.css";
import {useState} from "react";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import PortfolioCardPopUp from "./PortfolioCardPopUp/PortfolioCardPopUp";

const Portfolio = (props) => {
    const portfolioCardImg = props.portfolio.map(imgCard => <PortfolioCard portfolioCard={imgCard}/>)
    const popUpCard = props.portfolio.map(popUp => <PortfolioCardPopUp portfolioCard={popUp}/>)
    const [img, setImg] = useState();
    const [popup, setPopup] = useState();


  return (
      <div className="container">
          <div className="tytle">PORTFOLIO</div>
          <div className="portfolio_flex">
              {portfolioCardImg}
          </div>

          <div className="portfolio_popup">
              {popUpCard}
          </div>
      </div>
  )
}

export default Portfolio;