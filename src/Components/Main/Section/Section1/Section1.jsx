import "./Section1.css";
const Section1 = (props) => {
    return (
        <section>
            <div className="section1_background">
                <div className="section1_text"><div>{props.section1[0]}</div><div>{props.section1[1]}</div></div>
            </div>
        </section>
    )
}
export  default  Section1;