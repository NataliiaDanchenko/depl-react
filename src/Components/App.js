
import './App.css';
import Header from "./Header/Header";
import img from "../assets/img/Header/header-logo.svg";
import Main from "./Main/Main";
import SectionProcess from "./SectionProcess/SectionProcess";
import WhatImportantVideo from "./WhatImportantVideo/WhatImportantVideo";
import Price from "./Price/Price";
import Team from "./Team/Team";
import {Route, Routes} from "react-router-dom";



function App(props) {
  return (

    <div className="App">

        <Routes>
            <Route path="/" element={<Header links={props.state.header} logo={img} contacts={props.state.header.contacts} logosTitle={props.state.header.logosTitle} h1={props.state.header.h1}/>}/>
            <Route path="/portfolio" element={<Main main={props.state.main}/>}/>
            <Route path="/works" element={<SectionProcess sectionProcess={props.state.sectionProcess}/>}/>
            <Route path="/about-us" element={<WhatImportantVideo whatImportantVideo={props.state.whatImportantVideo}/>}/>
            <Route path="/price" element={<Price price={props.state.price} pricePrice={props.state.pricePrice}/>}/>
            <Route path="/Contacts" element={<Team teamImg={props.state.teamImg} team={props.state.team}/>}/>
        </Routes>

        {/* <Footer logo={props.state.footer.imgLogo} logoFooter={img} logoTytle={props.state.footer.logoTytle} logoSubTytle={props.state.footer.logoSubTytle}/> */}

    </div>
  );
}

export default App;
