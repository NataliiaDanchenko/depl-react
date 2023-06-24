import "./WhatImportantVideo.css";
import WhatImportantVideoCard from "./WhatImportantVideoCard/WhatImportantVideoCard";
import {NavLink} from "react-router-dom";


const WhatImportantVideo = (props) => {
    const importantVideo = props.whatImportantVideo.map(impVid => <WhatImportantVideoCard imVid={impVid}/>);
    return (
      <div className="container">
          <div className="nav-what-important-video">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/works">Our Works</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/price">Price</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
      </div>
        <div className="what_important_video">
            <div className="what_important_video_title">
                <div className="what_important_video_title_background"><h2>WHAT IS IMPORTANT</h2></div>
            </div>
            <div className="what_important_video_flex">
                {importantVideo}
            </div>
        </div>
      </div>
  )
}

export default WhatImportantVideo;