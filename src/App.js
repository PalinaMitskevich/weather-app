import { useState, useEffect } from "react";
import { citiesConfig, cityNames, baseUrl, apiKey } from "./constants";
import WeatherCard from "./components/WeatherCard";
import "./app.css";


function App() {
  const [activeCity, setActiveCity] = useState(cityNames[0])
  const [weatherData, setWeatherData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const city = citiesConfig.find(({ name }) => name === activeCity)

    setIsLoading(true)
    fetch(`${baseUrl}?lat=${city.lat}&lon=${city.lon}&appid=${apiKey}`)
      .then((response) => response.json())
      .then((resp) => setWeatherData(resp))
      .then(() => setIsLoading(false))
  }, [activeCity])

  const handleClick = (event) => {
    setActiveCity(event.target.innerHTML)
  }

  return (
    <div className='content-wrapper'>
      <div className='cities-list'>
        <p className="list-header">Choose city:</p>
        <ul>
          {cityNames.map((cityName) => (
            <li
              key={cityName}
              className={activeCity === cityName ? 'active-city city-name' : 'city-name'}
              onClick={handleClick}
            >
              {cityName}
            </li>
          ))}
        </ul>
      </div>
      <WeatherCard weatherData={weatherData} isLoading={isLoading}/>
    </div>
  );
}

export default App;
