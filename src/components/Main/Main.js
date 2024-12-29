import React from "react";
import styles from "./Main.css";
import img1 from "../../asstes/images/clear.png"
import img2 from "../../asstes/images/sun.png"
import img3 from "../../asstes/images/heavy-rain.png"
import img4 from "../../asstes/images/rain_sun.png"
import img5 from "../../asstes/images/cloud.png"

const Main = ({data}) => {

    const getImageForWeather = (weather) => {
        switch (weather) {
            case "Clouds":
              return img5;
            case "Sunny":
              return img2;
            case "Rainy":
              return img3; 
            case "Clear":
              return img1;
            default:
              return img1; 
          }
    };
    try{
        //console.log(data);
        const weatherImg = getImageForWeather(data.weather[0].main);
        return ( 
            <div className="d-flex justify-content-center">
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