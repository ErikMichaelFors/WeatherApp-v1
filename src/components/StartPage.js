import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import {MyFavorites} from '../LocalStorageHandler';
import { API_Weather_Module as WeatherAPI } from '../WeatherAPI'
import DetailView from './DetailView';
import ForecastView from './ForecastView';
//import Img from 'react-image';

class StartPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            WeatherData: /*{"location": {"name": "Stockholm", "localtime": "test time"}, "current": {"temp_c": "40 grader varmt"}, "real_data": "false"}*/null,
            ForecastData: "",
            bool: true
        }
    }

    async componentDidMount(){
        console.log("Before Mount");
        await WeatherAPI.GetWeather(this.props.DefaultLocation).then((data)=>{
            this.setState({
                WeatherData: data
            });
        });
        await WeatherAPI.GetFiveDayForecast("Stockholm","Sweden").then((data)=>{

            var dates = []
            for (var i=0; i<data.cnt && this.state.bool; i++){
                dates.push(data.list[i].dt_txt.split(" ")[0])
            }
            this.state.bool = false;

            var Days = [];
            var Day = [];
            for (i=0; i<dates.length; i++){
                if (i!==0){
                    if (dates[i] === dates[i-1]){
                        Day.push(data.list[i]);
                    }
                    else {
                        Days.push(Day);
                        Day = [];
                        Day.push(data.list[i]);
                    }
                    if (i === dates.length-1){
                        Days.push(Day);
                    }
                }
                else {
                    Day.push(data.list[i]);
                }
            }

            this.setState({
                ForecastData: Days
            });
        });
        console.log("After Mount");
    }

    GetDay=(int)=>{
        const Day = ["Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag","Söndag"];
        var index = (new Date().getDay()+int) % 7;
        return Day[index];
    }

    render() {
        console.log("In Render");
        var First  = null;
        var Second = null;
        var Third  = null;
        var Fourth = null;
        var Fifth  = null;
        for (var i=0; i<this.state.ForecastData.length; i++){
            for (var k=0; k<this.state.ForecastData[i].length; k++){
                console.log(JSON.stringify(this.state.ForecastData[i][k]))//.dt_txt).split(' ')[0].split('"')[0])
            }
            if (i===1) First  = JSON.stringify(this.state.ForecastData[i][0].dt_txt).split(" ")[0].slice(1);
            if (i===2) Second = JSON.stringify(this.state.ForecastData[i][0].dt_txt).split(" ")[0].slice(1);
            if (i===3) Third  = JSON.stringify(this.state.ForecastData[i][0].dt_txt).split(" ")[0].slice(1);
            if (i===4) Fourth = JSON.stringify(this.state.ForecastData[i][0].dt_txt).split(" ")[0].slice(1);
            if (i===5) Fifth  = JSON.stringify(this.state.ForecastData[i][0].dt_txt).split(" ")[0].slice(1);
        }
        
    return (
        <div className="WeatherNow">
            <h1>Weather App</h1>
            <h2>Stockholm</h2>
            <div className="WeatherNowInner">
                    <div id="TodayDetails" className="DetailView">
                        <h2>Idag ({new Date().toLocaleString().split(" ")[0]})</h2>
                        <DetailView weatherData={this.state.WeatherData}/>
                    </div>
                

                <div className="ForecastView">
                            <h2>Närmsta fem dagarna</h2>
                        <div id="float-row">
                            <div className="DetailView">
                                <h3>{this.GetDay(0)} ({First})</h3>
                                <DetailView forecast={this.state.ForecastData[1]}/>
                            </div>
                            <div className="DetailView">
                                <h3>{this.GetDay(1)} ({Second})</h3>
                                <DetailView forecast={this.state.ForecastData[2]}/>
                            </div>
                            <div className="DetailView">
                                <h3>{this.GetDay(2)} ({Third})</h3>
                                <DetailView forecast={this.state.ForecastData[3]}/>
                            </div>
                            <div className="DetailView">
                                <h3>{this.GetDay(3)} ({Fourth})</h3>
                                <DetailView forecast={this.state.ForecastData[4]}/>
                            </div>
                            <div className="DetailView">
                                <h3>{this.GetDay(4)} ({Fifth})</h3>
                                <DetailView forecast={this.state.ForecastData[5]}/>
                            </div>
                        </div>
                    <ForecastView forecast={this.state.ForecastData}/>
                </div>
            </div>
        </div>
    );
    }
}

export default StartPage;