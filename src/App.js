import './App.css';
import React, {useState} from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import searchIcon from './asstes/images/search.png';

function App() {
  const [location, setLocation] = useState('');

  const [weatherData, setWeatherResponse] = useState(null);
  const [forecastData, setForecastResponse] = useState(null);
  //const currentWeatherFetch = fetch('https://api.openweathermap.org/data/2.5/weather?lat=49.63326874075631&lon=20.473368663221848&appid=6276eea278f6f63ee4850b553409899c');


  const HandleLocationSet = (newLocation) => {
    setLocation(newLocation);
  }

  const HandleOnClick = () =>{
    console.log("LATA JAK SKURWYSYN");
    const currentWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6276eea278f6f63ee4850b553409899c&units=metric`);
    const currentForecastFetch = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Łukowica&appid=6276eea278f6f63ee4850b553409899c&units=metric`);
  
  
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
    <div className="App">
      <div className='container'>
        <Header onTextChange={HandleLocationSet}/>
        {weatherData && <Main data={weatherData}/>}
        <button   style={{
          backgroundImage: `url(${searchIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          border: 'none',
          width: '35px', // Adjust as needed
          height: '35px', // Adjust as needed
          cursor: 'pointer'
  }} onClick={HandleOnClick}></button>
      </div>
    </div>
  );
}

export default App;
