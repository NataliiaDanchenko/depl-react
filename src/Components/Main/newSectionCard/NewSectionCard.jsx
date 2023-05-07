import "./NewSectionCard.css";

const Card = (props) => {
    return (
        <div className="our_superpower_flex_card">
            <div className="our_superpower_flex_card_inner">
                <img src={props.card.icon} alt="icon"></img>
                <div className="our_superpower_flex_card_inner_text">{props.card.text}</div>
            </div>
        </div>
    )
}
export  default Card;