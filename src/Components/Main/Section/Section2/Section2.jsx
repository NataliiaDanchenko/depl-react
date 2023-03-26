
import Card from "./newSectionCard/NewSectionCard";
import "./Section2.css";

const Section2 = (props) => {
    return (
        <section className="our_superpower">
            <div className="container">
                <div className="h2"><h2>OUR SUPERPOWER</h2></div>
                <div className="our_superpower_flex">

                    {
                        props.offers.map(c => <Card offer={c}/>)
                    }

                </div>
            </div>
        </section>
    )
}
export  default Section2;