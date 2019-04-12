import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import './myOwnStyles.css';
import SearchBar from './components/SearchBar.js';

class WeatherApp extends Component {
  render() {
    return (
      <div className="WeatherApp">
        <div id="header">
          <SearchBar></SearchBar>
        </div>
        <div id></div>
      </div>
    );
  }
}

export default WeatherApp;
