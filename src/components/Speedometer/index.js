import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  increment = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  brake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-cont">
        <div className="cont">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speedometer-image"
          />
          <h1 className="speed-text">Speed is {speed}mph</h1>
          <p className="speed-limits">Min limit is 0mph, Max limit is 200mph</p>
          <div className="buttons-container">
            <button className="accelerate-button" onClick={this.increment}>
              Accelerate
            </button>
            <button className="apply-brake-button" onClick={this.brake}>
              Apply brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
