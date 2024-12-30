import React from "react";
import styles from "./Main.css";
import clear from "../../asstes/images/clear.png"
import sun from "../../asstes/images/sun.png"
import rain from "../../asstes/images/heavy-rain.png"
import rain_sun from "../../asstes/images/rain_sun.png"
import cloud from "../../asstes/images/cloud.png"
import fog from "../../asstes/images/fog.png"

const Main = ({data}) => {

    const getImageForWeather = (weather) => {
        switch (weather) {
            case "Clouds":
                return cloud;
            case "Sunny":
                return sun;
            case "Rainy":
                return rain; 
            case "Clear":
                return clear;
            case "Fog":
                return fog;
            default:
                return clear; 
          }
    };

    try{
        //console.log(data);
        const weatherImg = getImageForWeather(data.weather[0].main);
        return ( 
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
        )
    }catch{
        return(
            <div>
                ERROR, ZAJEBALES SIE W PISOWNI MIEJSCA
            </div>
        )
    }

}

export default Main;