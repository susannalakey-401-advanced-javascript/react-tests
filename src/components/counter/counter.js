import React from 'react';
import './counter.scss'
import palm from './palm.png'
import statue from './statue.png'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleUp = e => {
    this.updateCounter(1);
  };

  handleDown = e => {
    this.updateCounter(-1);
  };

  updateCounter(countDiff) {
    this.setState((oldState) => ({
      count: oldState.count + countDiff,
    }))
  }

  render() {
    const countClass = this.state.count % 2 === 0 ? "show" : "hide";
    return (
      <>

        <section className="counter">
          <img src={palm} className={countClass} />
          <span className="down clicker" onClick={this.handleDown}> - </span>
          <span className="count">{this.state.count}</span>
          <span className="up clicker" onClick={this.handleUp}> + </span>
          <img src={statue} className={countClass} />
        </section>

      </>
    );
  }
}

export default Counter;