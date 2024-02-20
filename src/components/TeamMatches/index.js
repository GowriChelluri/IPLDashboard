import './index.css'
import {Component} from 'react'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {teamMatchDetails: []}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latestMatchDetails.umpires,
        result: data.latestMatchDetails.result,
        manOfTheMatch: data.latestMatchDetails.man_of_the_match,
        id: data.latestMatchDetails.id,
        date: data.latestMatchDetails.date,
        venue: data.latestMatchDetails.venue,
        competingTeam: data.latestMatchDetails.competing_team,
        competingTeamLogo: data.latestMatchDetails.competing_team_logo,
        firstInnings: data.latestMatchDetails.first_innings,
        secondInnings: data.latestMatchDetails.second_innings,
        matchStatus: data.latestMatchDetails.match_status,
      },
      recentMatches: data.recent_matches.map(eachItem => ({
        umpires: eachItem.umpires,
        result: eachItem.result,
        manOfTheMatch: eachItem.man_of_the_match,
        id: eachItem.id,
        date: eachItem.date,
        venue: eachItem.venue,
        competingTeam: eachItem.competing_team,
        competingTeamLogo: eachItem.competing_team_logo,
        firstInnings: eachItem.first_innings,
        secondInnings: eachItem.second_innings,
        matchStatus: eachItem.match_status,
      })),
    }
    this.setState({teamMatchDetails: updatedData})
  }

  render() {
    const {teamMatchDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchDetails
    return (
      <div>
        <img src={teamBannerUrl} alt="banner-text" />
        <p>Latest Matches</p>
        <div>
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </div>
        <ul>
          {recentMatches.map(eachMatch => (
            <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default TeamMatches
