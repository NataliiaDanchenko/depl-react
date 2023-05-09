import "./Section.ProcessCard.css";

const SectionProcessCard = (props) => {
    return (
        <div className="flex_card">
            <div className="img_title">
                <img src={props.sectionCard.img} alt="img"></img>
                <div>
                    <div className="process_title">{props.sectionCard.title}</div>
                    <div className="process_title">{props.sectionCard.subtitle}</div>
                </div>
            </div>
            <div className="process_text_img">
                <div className="process_text">{props.sectionCard.text}</div>
                <img src={props.sectionCard.images} alt="images"/>
            </div>
        </div>
    )
}

export default SectionProcessCard;