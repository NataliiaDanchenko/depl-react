import "./Footer.css";

const Footer = (props) => {
  return (
      <div className="footer">
        <div className="container">
            <div className="general_footer_flex">
                <div className="footer_flex">
                    <img src={props.logoFooter} alt="img"/>
                    <div>
                        <div className="footer_tytle">{props.logoTytle}</div>
                        <div className="footer_subtytle">{props.logoSubTytle}</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Footer;