import './index.css'

const Header = props => {
  const {timer, score} = props

  return (
    <div className="header-main-container">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <div className="timer-container">
        <p className="card-length">Score: {score}</p>
        <img
          className="timer"
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
          alt="timer"
        />
        <p className="card-length">
          {timer} <span className="spam-text">sec</span>
        </p>
      </div>
    </div>
  )
}
export default Header
