import "./WhatImportantVideo.css";
import WhatImportantVideoCard from "./WhatImportantVideoCard/WhatImportantVideoCard";
const WhatImportantVideo = (props) => {
    const importantVideo = props.whatImportantVideo.map(impVid => <WhatImportantVideoCard imVid={impVid}/>);
    return (
      <div className="container">
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