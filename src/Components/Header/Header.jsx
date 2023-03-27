
import "./Header.css";
import HeaderLink from "./HeaderLink/HeaderLink";

const Header = (props) => {
    let headerItems = props.links.links.map(link => <HeaderLink link={link}/>)
    return (
        <header>
            <div className="header_background">
                <div className="container">
                    <div className="header_logo_nav">
                        <div className="header_logo">
                            <img src={props.logo} alt="logo"/>
                            <div className="logo_text">{props.logosTitle.title1}<div>{props.logosTitle.title2}</div></div>
                        </div>
                        <nav>
                            {headerItems}
                            <div><a href="https://www.google.com.ua/"><div className="header_contact">{props.contacts}</div></a></div>
                        </nav>
                    </div>
                </div>

                <div className="header_title container">
                    <div className="header_title_brief">
                        <div className="header_title_text">{props.h1.titleH1}</div>
                        <div className="header_brief">
                            <div className="header_brief_button">
                                <div className="header_brief_button_text">{props.h1.brifButton}</div>
                            </div>
                            <div className="header_brief_text">{props.h1.brifSubTitle}</div>
                        </div>
                    </div>
                    <div className="header_title_img"></div>
                </div>

            </div>

        </header>
    )
}
export default Header;