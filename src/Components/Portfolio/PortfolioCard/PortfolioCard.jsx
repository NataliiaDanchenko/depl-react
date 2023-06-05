import "./PortfolioCard.css";
import newCard from "./../Portfolio";

const PortfolioCard = (props) => {
    return (
        <div>
            <img src={props.portfolioCard.img} alt="img"/>
        </div>
        )
}

export default PortfolioCard;