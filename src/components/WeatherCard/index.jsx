import React from "react";
import { convertKelvinToCelsium } from "../../utils";
import { iconUrl } from "../../constants";
import "./index.css"

export default function WeatherCard({ weatherData, isLoading }) {
  const weatherDescription = weatherData && weatherData.weather && weatherData.weather[0].description
  const iconCode = weatherData && weatherData.weather && weatherData.weather[0].icon

 return (
   <div className='weather-box'>
     {isLoading ? <div className="loader"/> : (
       <div className='weather-card' >
         <div className='weather-information'>
           <p className='temperature'>{convertKelvinToCelsium(weatherData.main?.temp)}°</p>
           <div className='weather-description'>
             <img src={`${iconUrl}${iconCode}.png`} className='small-icon' alt='weather-icon' />
             <p>{weatherDescription}</p>
           </div>
           <div className='line'/>
           <div className='wind'>Wind: {Math.trunc(weatherData.wind?.speed)}</div>
           <div className='humidity'>Humidity: {weatherData.main?.humidity}</div>
         </div>
         <img src={`${iconUrl}${iconCode}.png`} className='big-icon' alt='weather-icon' />
       </div>
     )}
   </div>
 )
}

