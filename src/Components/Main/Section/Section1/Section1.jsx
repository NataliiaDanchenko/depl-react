import "./Section1.css";
const Section1 = (props) => {
    return (
        <section>
            <div className="section1_background">
                <div className="section1_text">{props.backgroundVideo}</div>
                <div className="section1_text">{props.backgroundVideoSubTitle}</div>
            </div>

        </section>
    )
}
export  default  Section1;

