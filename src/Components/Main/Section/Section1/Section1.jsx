import "./Section1.css";
const Section1 = (props) => {
    return (
        <section>
            <div className="section1_background">
                <div className="section1_text"><div>{props.backgroundVideo.backgroundVideoTitle}</div><div>{props.backgroundVideo.backgroundVideoSubTitle}</div></div>
            </div>
        </section>
    )
}
export  default  Section1;