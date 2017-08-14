import React, { Component } from 'react';
import UsersComponent from './UsersComponent';
import FXRatesComponent from './FXRatesComponent';

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <UsersComponent />
        <FXRatesComponent baseCurrency = 'USD' />
      </div>
    );
  }
};
