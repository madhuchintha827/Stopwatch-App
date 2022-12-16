// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {seconds: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  updateTime = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }))
  }

  onClickStart = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
  }

  onClickStop = () => {
    clearInterval(this.timeInterval)
  }

  onClickReset = () => {
    clearInterval(this.timeInterval)
    this.setState({seconds: 0})
  }

  renderMinutes = () => {
    const {seconds} = this.state

    const minutes = Math.floor(seconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {seconds} = this.state

    const second = Math.floor(seconds % 60)

    if (second < 10) {
      return `0${second}`
    }
    return second
  }

  render() {
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card-container">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
              alt="stopwatch"
            />
            <h1 className="timer">Timer</h1>
          </div>
          <h1 className="time">{time}</h1>
          <div className="buttons-container">
            <button
              className="start button"
              type="button"
              onClick={this.onClickStart}
            >
              Start
            </button>

            <button
              className="stop button"
              type="button"
              onClick={this.onClickStop}
            >
              Stop
            </button>

            <button
              className="reset button"
              type="button"
              onClick={this.onClickReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
