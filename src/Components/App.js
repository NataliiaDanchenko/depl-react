
import './App.css';
import Header from "./Header/Header";
import img from "../assets/img/Header/header-logo.svg";
import Main from "./Main/Main";
import SectionProcess from "./SectionProcess/SectionProcess";
import WhatImportantVideo from "./WhatImportantVideo/WhatImportantVideo";
import Price from "./Price/Price";


function App(props) {
  return (

    <div className="App">

        <Header links={props.state.header} logo={img} contacts={props.state.header.contacts} logosTitle={props.state.header.logosTitle} h1={props.state.header.h1}/>
        <Main main={props.state.main}/>
        <SectionProcess sectionProcess={props.state.sectionProcess}/>
        <WhatImportantVideo whatImportantVideo={props.state.whatImportantVideo}/>
        <Price price={props.state.price} pricePrice={props.state.pricePrice}/>


    </div>
  );
}

export default App;
