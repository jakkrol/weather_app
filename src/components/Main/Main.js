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
    const [openIndex, setOpenIndex] = useState([]); // this will track which item is open

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
                            <img src={weatherImg} alt="weather-icon" className="img-main"></img>
                        </div>
                    </div>
                </div>


                {/* forecast */}
                <div>
                    {forecast.list
                        .filter(item => item.dt_txt.split(" ")[0] !== currentDate && item.dt_txt.split(" ")[1] === "12:00:00")
                        .map((item, index) => {
                            const _dayOfWeek = (new Date(item.dt_txt).toLocaleDateString("locale", { weekday: 'long'}));
                            const dayOfWeek = _dayOfWeek.charAt(0).toLocaleUpperCase() + _dayOfWeek.slice(1);
                            return (
                            <div key={index}>
                                <div
                                    className="futher-days"
                                    onClick={() => {
                                        const tempOpenIndex = [...openIndex];
                                        const itemIndex = openIndex.indexOf(index);
                                        if(itemIndex === -1){
                                            tempOpenIndex.push(index);
                                        }else{
                                            tempOpenIndex.splice(itemIndex, 1);
                                        }
                                        setOpenIndex(tempOpenIndex);
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {dayOfWeek}
                                </div>

                                    {openIndex.includes(index) && (
                                        <div className="collapsing-item">
                                            {forecast.list
                                                .filter(_item => _item.dt_txt.split(" ")[0] === item.dt_txt.split(" ")[0] && !["00:00:00", "03:00:00"].includes(_item.dt_txt.split(" ")[1]))
                                                .map((_item, _index)=> (
                                                    <div key={_index} className="forecastDay el">
                                                        <p>{(_item.dt_txt.split(" ")[1]).split(":")[0] + ":" + (_item.dt_txt.split(" ")[1]).split(":")[1]}</p>
                                                        <p>{_item.main.temp}℃</p>
                                                        <p><img src={getImageForWeather(_item.weather[0].main)} className="img-forecast"></img>{_item.weather[0].main}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )}

                            </div>
                            )
                        })}
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