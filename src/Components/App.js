
import './App.css';
import Header from "./Header/Header";
import img from "../assets/img/Header/header-logo.svg";
import Main from "./Main/Main";
import SectionProcess from "./SectionProcess/SectionProcess";
import WhatImportantVideo from "./WhatImportantVideo/WhatImportantVideo";
import Price from "./Price/Price";
import Team from "./Team/Team";
import Footer from "./Footer/Footer";
import Portfolio from "./Portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import OurWorks from "./OurWorks/OurWorks";


function App(props) {
  return (

    <div className="App">

        <Header links={props.state.header} logo={img} contacts={props.state.header.contacts} logosTitle={props.state.header.logosTitle} h1={props.state.header.h1}/>

        <Routes>
            <Route path="/portfolio" element={<Portfolio portfolio={props.state.portfolio}/>}/>
            <Route path="/our works" element={<OurWorks portfolio={props.state.portfolio}/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
        </Routes>

        <Main main={props.state.main}/>
        <SectionProcess sectionProcess={props.state.sectionProcess}/>
        <WhatImportantVideo whatImportantVideo={props.state.whatImportantVideo}/>
        <Price price={props.state.price} pricePrice={props.state.pricePrice}/>
        <Team teamImg={props.state.teamImg} team={props.state.team}/>
        <Footer logo={props.state.footer.imgLogo} logoFooter={img} logoTytle={props.state.footer.logoTytle} logoSubTytle={props.state.footer.logoSubTytle}/>

    </div>
  );
}

export default App;
