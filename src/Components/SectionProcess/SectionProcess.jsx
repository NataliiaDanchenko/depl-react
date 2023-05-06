import "./SectionProcess.css"
import SectionProcessCard from "./SectionProcessCard/SectionProcessCard";

const Process = (props) => {
    const processCardItem = props.sectionProcess.map(sectionCard => <SectionProcessCard sectionCard={sectionCard}/>)
    return (
        <section className="container">
            <div className="process">
                <div className="h2_background_color_flex">
                    <div className="h2_background_color">
                        <h2>Процесс нашей  работы</h2>
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