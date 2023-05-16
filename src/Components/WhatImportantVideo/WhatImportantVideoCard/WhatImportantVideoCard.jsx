import "./WhatImportantVideoCard.css";

const WhatImportantVideoCard = (props) => {
  return (
      <div className="card_wrap">
          <div>
              <div className="important_video_card_flex">
                  <div>
                      <div className="important_video_title">{props.imVid.title}</div>
                      <div className="important_video_text">{props.imVid.text}</div>
                  </div>
                  <div className="important_video_img">
                      <img src={props.imVid.img} alt="img"/>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default WhatImportantVideoCard;