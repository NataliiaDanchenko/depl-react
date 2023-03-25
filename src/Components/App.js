
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer";
import img from "../assets/img/Header/header-logo.svg";

function App(props) {
  return (
    <div className="App">
      <header className="App">
        <Header links={props.state.header.links} logo={img} contacts={props.state.header1.contacts} logosTitle={props.state.header2.logosTitle} h1={props.state.header3.h1}/>
      </header>

        <Main section1={props.state.main.section1} section2={props.state.main1.section2} newSectionCard={props.state.main1.section2}/>
        <Footer/>

    </div>
  );
}

export default App;
