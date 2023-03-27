
import './App.css';
import Header from "./Header/Header";
import Works from "./Header/Works/Works";
import AboutUs from "./Header/AboutUs/AboutUs";
import Price from "./Header/Price/Price";
import Main from "./Main/Main";
import Footer from "./Footer";
import img from "../assets/img/Header/header-logo.svg";
import {Route, Routes} from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <header className="App">
        <Header links={props.state.header} logo={img} contacts={props.state.header.contacts} logosTitle={props.state.header.logosTitle} h1={props.state.header.h1}/>

      </header>
    <Routes>
        <Route path="/portfolio" element={<Main backgroundVideo={props.state.main.backgroundVideo}  offers={props.state.main.offers} newSectionCard={props.state.offers}/>}/>
        <Route path="/works" element={<Works/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/price" element={<Price/>}/>
    </Routes>

        { /*<Main backgroundVideo={props.state.main.backgroundVideo}  offers={props.state.main.offers} newSectionCard={props.state.offers}/> */}
        <Footer/>

    </div>
  );
}

export default App;
