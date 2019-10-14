import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import '../myOwnStyles.css';

class DetailView extends Component {
  constructor(props){
    super(props);
    this.state = {
      // WeatherData: {"location": {"name": "Stockholm", "localtime": "test time"}, "current": {"temp_c": "40 grader varmt"}}
      "Celcius_Today" : props.weatherData.current.temp_c,
      "City_Name" : props.weatherData.location.name,
      "Local_Time" : props.weatherData.location.localtime
    }
  }
  render() {
    return (
      <div>
          <h3>{this.state.City_Name}</h3>
          <h4>{this.state.Celcius_Today}</h4>
          <h4>{this.state.Local_Time}</h4>
      </div>
    );
  }
}

export default DetailView;