// https://api.apixu.com/v1/current.json?key=df3ff82e02274d79aef74339191204&q=Stockholm

 

export var API_Weather_Module = (function () {

    // let myId = "97aa664c448f4e85abd6a28b308b0896";
    
    async function getSthlm(){
        return await getWeather("Stockholm");
    }

    async function getWeather(city){
        let url = "https://api.apixu.com/v1/current.json?key=df3ff82e02274d79aef74339191204&q="+city;
        let x = await fetch(url);
        let data = await x.json();
        return data;
    }

    return {
        GetSthlm: getSthlm
    }
})();