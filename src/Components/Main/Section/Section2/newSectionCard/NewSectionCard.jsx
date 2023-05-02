import "./NewSectionCard.css";

const Card = (props) => {
    return (
        <div className="our_superpower_flex_card">
            <div className="our_superpower_flex_card_inner">
                <div className="our_superpower_flex_card_inner_icon">
                    <div>{props.icon}></div>
                    <div className="our_superpower_flex_card_inner_text">{props.text}</div>
                </div>
            </div>
        </div>
    )
}
export  default Card;