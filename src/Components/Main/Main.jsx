
import "./Main.css";
import NewSectionCard from "./newSectionCard/NewSectionCard";


const Main = (props) => {
    let section2Items = props.main.section2.map(card => <NewSectionCard card={card}/>)
    return (
        <main>
            <div className="main_background">
                <div className="main_text">{props.main.section1.backgroundVideoTitle}</div>
                <div className="main_text">{props.main.section1.backgroundVideoSubTitle}</div>
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