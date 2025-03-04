import React from "react";
import styles from "./Main.css";
import clear from "../../asstes/images/clear.png"
import sun from "../../asstes/images/sun.png"
import rain from "../../asstes/images/heavy-rain.png"
import rain_sun from "../../asstes/images/rain_sun.png"
import cloud from "../../asstes/images/cloud.png"
import fog from "../../asstes/images/fog.png"
import snow from "../../asstes/images/snowy.png"
var displayCounter = 0;
const Main = ({data, forecast}) => {
    const date = new Date();
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    
    let currentDate = `${year}-${month}-${day}`; 
    console.log(currentDate);

    const getImageForWeather = (weather) => {
        switch (weather) {
            case "Clouds":
                return cloud;
            case "Sunny":
                return sun;
            case "Rain":
                return rain; 
            case "Clear":
                return clear;
            case "Fog":
                return fog;
            case "Mist":
                return fog;
            case "Snow":
                return snow;
            default:
                return clear; 
          }
    };

    try{
        console.log(data);
        console.log(forecast);
        
        const weatherImg = getImageForWeather(data.weather[0].main);
        return ( 
            <div>
                {/* main card */}
                <div className="d-flex justify-content-center align-items-center">
                    <div className="row weather-card text-adj m-1">
                        <div className="col-12 col-sm-7 order-sm-1 order-2">
                            <p>{data.name}</p>   
                            <p>Status: {data.weather[0].main}</p>
                            <p>Temperature: {data.main.temp}℃</p>
                        </div>
                        <div className="col-12 col-sm-5 order-sm-2 order-1 justify-content-center align-items-center d-flex">
                            <img src={weatherImg} alt="weather-icon"></img>
                        </div>
                    </div>
                </div>

                {/* another days */}
                <div>
                {forecast.list
                    .filter((item, _) => (item.dt_txt).split(" ")[0] != currentDate ) // Pick all elements excluding actual date
                    .map((item, index) => (
                        <div key={index} className="item">
                        {item.dt_txt}
                        </div>
                ))}
                </div>
            </div>
        )
    }catch{
        return(
            <div className="d-flex justify-content-center align-items-center">
            <div className="row weather-card text-adj m-1">
                <p>TEST</p>
            </div>
        </div>
        )
    }


}
export default Main;