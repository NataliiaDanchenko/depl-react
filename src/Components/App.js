
import './App.css';
import Header from "./Header/Header";
import img from "../assets/img/Header/header-logo.svg";
import Main from "./Main/Main";
import Section1 from "./Main/Section/Section1/Section1";
import Section2 from "./Main/Section/Section2/Section2";



function App(props) {
  return (

    <div className="App">
      <header className="App">
        <Header links={props.state.header} logo={img} contacts={props.state.header.contacts} logosTitle={props.state.header.logosTitle} h1={props.state.header.h1}/>
      </header>
        <main>
           <Main/>
        </main>


    </div>
  );
}

export default App;
