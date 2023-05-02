
import "./Section2.css";
import NewSectionCard from "./newSectionCard/NewSectionCard";

const Section2 = (props) => {
    {/*} let sectionCard = props.map(card => <NewSectionCard props={card} />)*/}

    return (
        <section className="our_superpower">
            <div className="container">
                <div className="h2"><h2>OUR SUPERPOWER</h2></div>
                <div className="our_superpower_flex">

                    <div className="section1_text"></div>

                </div>
            </div>
        </section>
    )
}
export  default Section2;