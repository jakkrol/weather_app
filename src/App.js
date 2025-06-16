import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import searchIcon from './asstes/images/search.png';

function App() {
  //const [location, setLocation] = useState('');

  const [weatherData, setWeatherResponse] = useState(null);
  const [forecastData, setForecastResponse] = useState(null);
  //const currentWeatherFetch = fetch('https://api.openweathermap.org/data/2.5/weather?lat=49.63326874075631&lon=20.473368663221848&appid=6276eea278f6f63ee4850b553409899c');

  useEffect(() => {
  if (weatherData) {
    localStorage.setItem("weatherData", JSON.stringify(weatherData));
  }
}, [weatherData]);

useEffect(() => {
  if (forecastData) {
    localStorage.setItem("forecastData", JSON.stringify(forecastData));
  }
}, [forecastData]);


useEffect(() => {
  const savedWeather = localStorage.getItem("weatherData");
  const savedForecast = localStorage.getItem("forecastData");

  if (savedWeather) {
    setWeatherResponse(JSON.parse(savedWeather));
  }

  if (savedForecast) {
    setForecastResponse(JSON.parse(savedForecast));
  }
}, []);



  // const HandleLocationSet = (newLocation) => {
    //DO ODWOLANIA
  // }

  const HandleOnClick = (newLocation) =>{
    // setLocation(newLocation);
    // console.log("Lokacja" + location)
    console.log("LATA JAK SKURWYSYN:" + newLocation);
    const currentWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newLocation}&appid=6276eea278f6f63ee4850b553409899c&units=metric`);
    const currentForecastFetch = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${newLocation}&appid=6276eea278f6f63ee4850b553409899c&units=metric`);
  
  
    Promise.all([currentWeatherFetch, currentForecastFetch])
      .then(async(response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
  
        setWeatherResponse(weatherResponse);
        setForecastResponse(forecastResponse);
        //console.log(weatherResponse.main.temp);
        // console.log("WEATHER TEST");
        // console.log(forecastResponse);
        // console.log("FORECAST TEST");
      }) 
  }


  return (
    <div className="App d-flex vh-100">
      <div className='container vh-100 d-flex flex-column'>
        <div className='row'>
          <Header onClick={HandleOnClick}/>
        </div>
        <div className='row flex-grow-1  align-items-start mt-5'>
          {forecastData && weatherData && <Main data={weatherData} forecast={forecastData}/>}
          
        </div>
      </div>
    </div>
  );
}

export default App;
