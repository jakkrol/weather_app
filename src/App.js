import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {

  //const currentWeatherFetch = fetch('https://api.openweathermap.org/data/2.5/weather?lat=49.63326874075631&lon=20.473368663221848&appid=6276eea278f6f63ee4850b553409899c');
  const currentWeatherFetch = fetch('https://api.openweathermap.org/data/2.5/weather?q=Łukowica&appid=6276eea278f6f63ee4850b553409899c&units=metric');
  const currentForecastFetch = fetch('https://api.openweathermap.org/data/2.5/forecast?q=Łukowica&appid=6276eea278f6f63ee4850b553409899c&units=metric');


  Promise.all([currentWeatherFetch, currentForecastFetch])
    .then(async(response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
      console.log(weatherResponse);
      console.log("WEATHER TEST");
      console.log(forecastResponse);
      console.log("FORECAST TEST");
    }) 



  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
