
import "./Main.css";
import Section1 from "./Section/Section1/Section1";
import Section2 from "./Section/Section2/Section2";



const Main = (props) => {

    return (
        <main>
            <Section1 backgroundVideo="PROFESSIONAL VIDEO PRODUCTION" backgroundVideoSubTitle="20 YEARS OF MEDICAL VIDEO MARKETING"/>
            <Section2 icon="icon1" text="Creating image and training videos"/>

        </main>
    )
}
export  default Main;