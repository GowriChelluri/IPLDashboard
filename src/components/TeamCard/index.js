import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

class TeamCard extends Component {
  render() {
    const {cardDetails} = this.props
    const {name, teamImageUrl, id} = cardDetails
    return (
      <Link to={`/team-matches/${id}`}>
        <li className="card-container">
          <img src={teamImageUrl} alt={`${name}`} className="team-logo" />
          <h1 className="team-name">{name}</h1>
        </li>
      </Link>
    )
  }
}

export default TeamCard
