
import "./Main.css";
import Section1 from "./Section/Section1/Section1";
import Section2 from "./Section/Section2/Section2";

const Main = (props) => {
    return (
        <main>
            <Section1 section1={props.section1}/>
            <Section2 section2={props.section2}/>
        </main>
    )
}
export  default Main;