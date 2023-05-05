
import './App.css';
import Header from "./Header/Header";
import img from "../assets/img/Header/header-logo.svg";
import Main from "./Main/Main";
import icon1 from "../assets/img/Section2_Our_Super_Power/icons1.svg";
import icon2 from "../assets/img/Section2_Our_Super_Power/icons2.svg";
import icon3 from "../assets/img/Section2_Our_Super_Power/icons3.svg";
import icon4 from "../assets/img/Section2_Our_Super_Power/icons4.svg";


let state = {
    header:
        {
            links: [
                {
                    name: "Portfolio",
                    address: "/"
                },
                {
                    name: "Our works",
                    address: "/works"
                },
                {
                    name: "About us",
                    address: "/about-us"
                },
                {
                    name: "Price",
                    address: "/price"
                }
            ],
            contacts: ["Contacts"],
            logosTitle: {
                title1: "MEDFORTD",
                title2: "MEDIA"
            },
            h1: {
                titleH1: "CREATING VIDEOS AND PODCASTS FOR BISNESS",
                brifButton: "Send a brief",
                brifSubTitle: "The brief gives an understanding of what type of video your business needs"
            }
        },

    main: {
        section1: {
            backgroundVideoTitle: "PROFESSIONAL VIDEO PRODUCTION",
            backgroundVideoSubTitle: "20 YEARS OF MEDICAL VIDEO MARKETING"
        },
        section2: [
            {
                icon: icon1,
                text: "Creating image and training videos"
            },
            {
                icon: icon2,
                text: "Providing production and technical support for corporate video blogs"
            },
            {
                icon: icon3,
                text: "Organizing and conducting thematic webinars"
            },
            {
                icon: icon4,
                text: "Recording podcasts in all business-friendly formats"
            }

        ]
    }
}

function App(props) {
  return (

    <div className="App">

        <Header links={props.state.header} logo={img} contacts={props.state.header.contacts} logosTitle={props.state.header.logosTitle} h1={props.state.header.h1}/>
        <Main main={state.main}/>



    </div>
  );
}

export default App;
