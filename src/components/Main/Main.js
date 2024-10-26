import React from "react";
import styles from "./Main.css";
import img1 from "../../asstes/images/cloudy.png"
import img2 from "../../asstes/images/sun.png"


const Main = ({data}) => {

    const getImageForWeather = (weather) => {
        switch (weather) {
            case "Clouds":
              return img1;
            case "Sunny":
              return img2;
            default:
              return img1; 
          }
    };

    const weatherImg = getImageForWeather(data.weather[0].main);

    return (
        <div className="d-flex justify-content-center main-background">
            <div className="row weather-card">
                <div className="col">
                    <p>test</p>
                </div>
                <div className="col">
                    <img src={img1} alt="weather-icon"></img>
                </div>
            </div>
        </div>
    )
}

export default Main;