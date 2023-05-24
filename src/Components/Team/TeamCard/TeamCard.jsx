import "./TeamCard.css";

const TeamCard = (props) => {
  return (
      <div className="team_card">
        <img src={props.teamCard.img} alt="img"/>
          <div className="teamCard_tytle">{props.teamCard.tytle}</div>
          <div className="teamCard_text">{props.teamCard.text}</div>
      </div>
  )
}

export default TeamCard;