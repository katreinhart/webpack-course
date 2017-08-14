import React, { Component } from 'react';
import getFxRates from 'fx';

import './style.css';

export default class FXRatesComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixerResponse: []
    };
  }

  componentDidMount() {
    getFxRates(this.props.baseCurrency, fixerResponse => {
      this.setState({
        fixerResponse
      });
    });
  }

  render() {
    let dailyRates = [];
    const { fixerResponse: { rates } } = this.state;
    const { fixerResponse: { date } } = this.state;

    const { baseCurrency } = this.props;

    for(const currency in rates) {
      const rate = rates[currency];
      dailyRates.push(<li className='list-group-item'
          key={ currency }> { currency } - <i className="fa fa-usd"></i>{ rate }</li>);
    }
    return (
      <div className="fxContainer">
        <h2 className="fxTitle"><i className="fa fa-money" aria-hidden="true"></i> Base { baseCurrency } <i className="fa fa-calendar" aria-hidden="true"></i> Date { date }</h2>
        <ul className="list-group">
            { dailyRates }
        </ul>

      </div>
    );
  }
}
