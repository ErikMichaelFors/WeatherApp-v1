// https://api.apixu.com/v1/current.json?key=df3ff82e02274d79aef74339191204&q=Stockholm

 

export var API_Weather_Module = (function () {

    let API_KEY = "0be8a16976ac899c82ddf8f732c71814";
    let city = "Stockholm";
    let country = "Sweden";
    // let myId = "97aa664c448f4e85abd6a28b308b0896";
    
    //"http://open.mapquestapi.com/geocoding/v1/reverse?key=aPXE7nkJXrWqZUBxEqLMxij2yCHuAeis&location="+FÖRSTA+","+ANDRA+"&includeRoadMetadata=true&includeNearestIntersection=true

    async function getCityName(Latitude, Longitude) {
        let url = "http://open.mapquestapi.com/geocoding/v1/reverse?key=aPXE7nkJXrWqZUBxEqLMxij2yCHuAeis&location="+Latitude+","+Longitude;//+"&includeRoadMetadata=true&includeNearestIntersection=true";
        let x = await fetch(url);
        let data = await x.json();
        console.log("API: "+JSON.stringify(data.results.locations));
        return data;//.results.locations.adminArea5;
    }

    async function getWeather(city){
        //let url = `https://api.apixu.com/v1/current.json?key=df3ff82e02274d79aef74339191204&q=${city}`;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`;
        let x = await fetch(url);
        let data = await x.json();
        return data;
    }

    async function getFiveDayForecast(){
        let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}&units=metric`;
        let x = await fetch(url);
        let data = await x.json();
        return data;
    }

    return {
        GetWeather: getWeather,
        GetCityName: getCityName,
        GetFiveDayForecast: getFiveDayForecast
    }
})();