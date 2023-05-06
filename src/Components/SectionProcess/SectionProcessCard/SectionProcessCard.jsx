import "./Section.ProcessCard.css";

const SectionProcessCard = (props) => {
    return (
        <div className="flex_card">
            <div className="img_title">

                <div>{props.sectionCard.title}</div>
            </div>

            <div>{props.sectionCard.text}</div>
        </div>
    )
}

export default SectionProcessCard;