import "./NewSectionCard.css";

const Card = (props) => {
    return (
        <div className="our_superpower_flex_card">
            <div className="our_superpower_flex_card_inner">
                <div className="our_superpower_flex_card_inner_icon">
                    <img src={props.section2.icon} alt="img"/>
                    <div className="our_superpower_flex_card_inner_text">{props.section2.text}</div>
                </div>
            </div>
        </div>
    )
}
export  default Card;