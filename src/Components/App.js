
import './App.css';
import Header from "./Header/Header";
import img from "../assets/img/Header/header-logo.svg";
import Main from "./Main/Main";
import SectionProcess from "./SectionProcess/SectionProcess";



function App(props) {
  return (

    <div className="App">

        <Header links={props.state.header} logo={img} contacts={props.state.header.contacts} logosTitle={props.state.header.logosTitle} h1={props.state.header.h1}/>
        <Main main={props.state.main}/>
        <SectionProcess sectionProcess={props.state.sectionProcess}/>


    </div>
  );
}

export default App;
