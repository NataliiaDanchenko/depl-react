import "./Price.css";
import PriceCard from "./PriceCard/PriceCard";
import {NavLink} from "react-router-dom";


const Price = (props) => {
    const priceCard = props.pricePrice.map(pc => <PriceCard pc={pc}/>);
  return (
      <div className="container">
          <div className="nav-price">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/works">Our Works</NavLink>
              <NavLink to="/about-us">About Us</NavLink>
              <NavLink to="/price">Price</NavLink>
              <NavLink to="/contacts">Contacts</NavLink>
          </div>

          <div className="title">PRICE</div>
          <div className="price_flex">
              <div className="price_input">
                  <div className="price_title">{props.price.title1}</div>
                  <div className="price_subtitle">{props.price.subTitle}</div>
                  <div>
                      <form className="form">
                          <div><input type="text" placeholder="Name"/></div>
                          <div><input type="text" placeholder="Phone"/></div>
                          <div><input type="text" placeholder="Email"/></div>
                          <div className="flex_button">
                              <div className="price_card_input">{props.price.button1}</div>
                          </div>
                    </form>
                  </div>
              </div>

              <div className="price_card_flex">
                  {priceCard}
              </div>
          </div>
      </div>

  )
}

export default Price;