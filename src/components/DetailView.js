import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import '../myOwnStyles.css';
import { throws } from 'assert';

class DetailView extends Component {
  constructor(props){
    super(props);
    this.state = {
      Forecast: {}
    }
  }
  render() {
    if (this.props.weatherData){
      const icon = this.props.weatherData.weather[0].icon;
      console.log("HEEEEEEEEEEJ "+icon)
      return (
        // Detta är dagens väder
        <div className="TableParentDiv thinner">
            <h3>
              {this.props.weatherData.main.temp} °C
            </h3>
            <h3>
              {new Date().toLocaleString().split(" ")[1]}
            </h3>
            <img alt={icon} src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
        </div>
      );
    }
    else if (this.props.forecast){
      const data = this.props.forecast;
      return (
        <div className="TableParentDiv forecastSection">
          <table className="forecastTable">
            <tr className="forecastTableRow">
              <th className="tableSpacingRight">Tid</th>
              <th className="tableSpacing">Avg</th>
              <th className="tableSpacing">Min</th>
              <th className="tableSpacingLeft">Max</th>
              <th>(°C)</th>
            </tr>
            {data.map((item) =>
            <tr>
              <td className="tableSpacingRight"><b>{item.dt_txt.split(" ")[1].slice(0, 5)}</b></td>
              <td className="tableSpacing">{item.main.temp}</td>
              <td className="tableSpacing">{item.main.temp_min}</td>
              <td className="tableSpacingLeft">{item.main.temp_max}</td>
              <td><img alt={item.weather[0].icon} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}></img></td>
            </tr>)}
          </table>
        </div>
      );
    }
    else {
      return (<div></div>)
    }
  }
}

export default DetailView;