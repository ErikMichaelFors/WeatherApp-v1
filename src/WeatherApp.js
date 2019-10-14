import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import './myOwnStyles.css';
import SearchBar from './components/SearchBar.js';
//import Route from  'react-router-dom/Route';
//import { BrowserRouter as Router} from 'react-router-dom';
import StartPage from './components/StartPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DetailView from './components/DetailView';
import FavoriteList from '../src/components/FavoriteList';
import { API_Weather_Module as WeatherAPI } from './WeatherAPI'

class WeatherApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      favorites: ["Stockholm", "Göteborg"],
      DefaultLocation: "Stockholm",
      Lat: null,
      Long: null,
      GeoLocationCity: null
    }
  }
    // Hämta Geo-location
    //navigator.geolocation.getCurrentPosition(this.showPosition);
    //console.log("Lat/LONG: "+this.state.Lat+" "+this.state.Long);
    //(console.log("CITY: "+this.GeoLocationCity));
  componentDidMount(){
    // hämta från localStorage

  }

  /*showPosition=(position)=> {
    this.setState({
      Lat: position.coords.latitude,
      Long: position.coords.longitude
    })
    console.log("(Latitude: "+position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude+")");
  } */

  /*blubb=(position)=>{
    this.setState({
      Lat: position.coords.latitude,
      Long: position.coords.longitude
    });
  } */
  
/*LoadCityName(){
  if (this.state.Lat !== null){
    if (this.state.Long !== null){
      WeatherAPI.GetCityName().then({
        function(data){
          console.log("DATATATATA: "+data);
          this.setState({
            GeoLocationCity: data
          });
        }
      });
    }
  }
} */


  addToFavorites =(newFavorite)=>{
    // spara till localStorage
  }

  ShowStockholm=()=>{

  }

  render() {
    return (
      <BrowserRouter>
      {/*<div className="App">
          <FavoriteList
            favorites={this.state.favorites}
          />
          <SearchBar DefaultLocation={this.state.DefaultLocation}></SearchBar>
    </div>*/}

      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <StartPage
              DefaultLocation={this.state.DefaultLocation}
            />
          )}
        />
        <Route
          path="/location/:location"
          render={(props) => (
            <DetailView
              {...props}
              addToFavorites={this.addToFavorites}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default WeatherApp;

/*
<Router>
  <div className="WeatherApp">
      <div id="header">
        <SearchBar></SearchBar>
      </div>
        <Route path="/home" exact component={StartPage}/>
      <div id="footer"></div>
  </div>
</Router>
*/