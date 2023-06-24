
import "./Main.css";
import NewSectionCard from "./newSectionCard/NewSectionCard";
import {NavLink} from "react-router-dom";


const Main = (props) => {
    let section2Items = props.main.section2.map(card => <NewSectionCard card={card}/>)
    return (
        <main>
            <div className="main_background">
                <div className="container nav-portfolio">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <NavLink to="/works">Our Works</NavLink>
                    <NavLink to="/about-us">About Us</NavLink>
                    <NavLink to="/price">Price</NavLink>
                    <NavLink to="/contacts">Contacts</NavLink>
                </div>
                <div className="main_container">
                    <div className="main_text">{props.main.section1.backgroundVideoTitle}</div>
                    <div className="main_text">{props.main.section1.backgroundVideoSubTitle}</div>
                </div>
            </div>
            <div className="main_our_superpower">
                <div className="container">
                    <div className="main_h2"><h2>OUR SUPERPOWER</h2></div>
                    <div className="main_our_superpower_flex">

                        {section2Items}

                    </div>
                </div>
            </div>
        </main>
    )
}
export  default Main;