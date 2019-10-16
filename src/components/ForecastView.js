import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import '../myOwnStyles.css';

class ForecastView extends Component {
  constructor(props){
    super(props);
    this.state = {
      "Forecast" : props.forecast,
      "List" : ""//JSON.stringify(props.forecast.list)
    }
  }
  render() {
    return (
        <div>
        </div>
    );
  }
}

export default ForecastView;