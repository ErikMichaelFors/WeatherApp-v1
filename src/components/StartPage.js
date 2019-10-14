import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import {MyFavorites} from '../LocalStorageHandler';
import { API_Weather_Module as WeatherAPI } from '../WeatherAPI'
import DetailView from './DetailView';
//import Img from 'react-image';

class StartPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            WeatherData: {"location": {"name": "Stockholm", "localtime": "test time"}, "current": {"temp_c": "40 grader varmt"}},
            FiveDayForecast: {}
        }
    }

    async componentDidMount(){
        console.log("Before Mount");
        WeatherAPI.GetWeather(this.props.DefaultLocation).then((data)=>{
            console.log("data: "+JSON.stringify(data));
            this.setState({
                WeatherData: data
            });
        });
        console.log("After Mount");
    }

    render() {
        console.log("In Render");
    return (
        <div className="WeatherNow">
            <h1>Weather App</h1>
            <div className="WeatherNowInner">
                <h2>Dagens väder</h2>
                <h2>Närmsta fem dagarna</h2>

                <div className="DetailView">
                    <DetailView weatherData={this.state.WeatherData}/>
                </div>
            </div>
        </div>
    );
    }
}

export default StartPage;