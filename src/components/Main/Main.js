import React, {useState} from "react";
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
    const [openIndex, setOpenIndex] = useState(null); // this will track which item is open

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


                {/* forecast */}
                <div>
                    {forecast.list
                        .filter(item => item.dt_txt.split(" ")[0] !== currentDate)
                        .map((item, index) => (
                            <div key={index}>
                                <div
                                    className="futher-days"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {item.dt_txt}
                                </div>
                                {openIndex === index && (
                                    <div className="collapse show"> {/* className optional here */}
                                        <p>"HUJ"</p>
                                        <p>Temp: {item.main.temp}℃</p>
                                        <p>Status: {item.weather[0].main}</p>
                                        {/* Add more info here if you want */}
                                    </div>
                                )}
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