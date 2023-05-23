import "./PriceCard.css";

const PriceCard = (props) => {
  return (
      <div className="price_card">
        <div className="price_title price_card_tytle">{props.pc.title}</div>
        <div className="price_text">{props.pc.text}</div>
        <div className="price_price">{props.pc.price}</div>
          <div className="price_button">{props.pc.button}</div>
      </div>
  )
}

export default PriceCard;