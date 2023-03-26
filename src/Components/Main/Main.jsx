
import "./Main.css";
import Section1 from "./Section/Section1/Section1";
import Section2 from "./Section/Section2/Section2";

const Main = (props) => {
    return (
        <main>

            <Section1 backgroundVideo={props.backgroundVideo}/>
            <Section2 offers={props.offers}/>

        </main>
    )
}
export  default Main;