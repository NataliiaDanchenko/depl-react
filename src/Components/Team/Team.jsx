import "./Team.css";
import TeamCard from "./TeamCard/TeamCard";

const Team = (props) => {
  const teamCards = props.team.map(teamCard => <TeamCard teamCard={teamCard}/>)
  return (
      <div className="container">
        <div className="team">
          <div className="tytle">{props.teamImg.tytleImg}</div>
          <div className="team_flex">
            {teamCards}
          </div>
        </div>
      </div>

  )
}

export default Team;