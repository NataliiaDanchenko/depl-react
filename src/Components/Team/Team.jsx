import "./Team.css";
import TeamCard from "./TeamCard/TeamCard";
import {NavLink} from "react-router-dom";

const Team = (props) => {
  const teamCards = props.team.map(teamCard => <TeamCard teamCard={teamCard}/>)
  return (
      <div className="container">
          <div className="nav-team">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/works">Our Works</NavLink>
              <NavLink to="/about-us">About Us</NavLink>
              <NavLink to="/price">Price</NavLink>
              <NavLink to="/contacts">Contacts</NavLink>
          </div>

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