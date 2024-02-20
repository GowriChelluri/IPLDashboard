import './index.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCardsList: []}

  componentDidMount() {
    this.onGetTeamDetails()
  }

  onGetTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamCardsList: updatedData})
  }

  render() {
    const {teamCardsList} = this.state
    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="card-bg-container">
          {teamCardsList.map(eachCard => (
            <TeamCard cardDetails={eachCard} key={eachCard.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
