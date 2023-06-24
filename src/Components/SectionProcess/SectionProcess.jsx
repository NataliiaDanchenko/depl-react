import "./SectionProcess.css"
import SectionProcessCard from "./SectionProcessCard/SectionProcessCard";
import {NavLink} from "react-router-dom";

const Process = (props) => {
    const processCardItem = props.sectionProcess.map(sectionCard => <SectionProcessCard sectionCard={sectionCard}/>)
    return (
        <section className="container">
            <div className="nav-our-works">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/works">Our Works</NavLink>
                <NavLink to="/about-us">About Us</NavLink>
                <NavLink to="/price">Price</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
            </div>

            <div className="process">
                <div className="h2_background_color_flex">
                    <div className="h2_background_color">
                        <h2>WORK PROCESS</h2>
                    </div>
                    <div >
                </div>
                    <div className="process_general_flex">

                        {processCardItem}

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Process;