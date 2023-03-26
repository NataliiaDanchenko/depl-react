
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer";
import img from "../assets/img/Header/header-logo.svg";

function App(props) {
  return (
    <div className="App">
      <header className="App">
        <Header links={props.state.header.links} logo={img} contacts={props.state.header.contacts} logosTitle={props.state.header.logosTitle} h1={props.state.header.h1}/>
      </header>

        <Main backgroundVideo={props.state.main.backgroundVideo}  offers={props.state.main.offers} newSectionCard={props.state.offers}/>
        <Footer/>

    </div>
  );
}

export default App;
