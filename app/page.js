'use client'
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
  const [city, setcity] = useState("")
  const [weatherInfo, setweatherInfo] = useState(null)
  const [imgSrc, setimgSrc] = useState("how to change image src link in react js by selecting className")
  const apiKey = '791ff8e1867a3b702b46299e2f804181';


  const getWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(response => {
      setweatherInfo(response.data);
    }).catch(error => {
      console.error("Something went wrong, Please try again!", error)
    });
  }


  // WEATHER ICON 
  const imgCloud = () => {
    return (Math.round(weatherInfo.main.temp - 273.15)) < 15 ? 'https://static.vecteezy.com/system/resources/previews/012/066/500/original/sunny-and-snowy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png' : 'https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png';
  }

  return (

    <div className='mt-2 w-full h-screen flex flex-col items-center '>
      <div className='video-background'>
        <video autoPlay muted loop className='backgroundVideo'>
          <source src='https://videos.pexels.com/video-files/5197505/5197505-sd_640_360_30fps.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='mt-5 px-20 py-10 pb-4 rounded-lg backdrop-blur-md	 border-[0.5px] transition border-white flex flex-col justify-center items-center '>
        <div className=' flex gap-4'>
          <input className='border-2 capitalize border-black px-4 py-2 font-bold rounded-lg text-xl' type='text' placeholder='Enter City Name' value={city} onChange={(e) => {
            setcity(e.target.value)
          }} />
          <button className='border-2 bg-blue-950 text-white text-xl font-bold px-3 w-48 py-2 rounded-lg ' onClick={getWeather} >Get Weather</button>
        </div>
        <div>
          {weatherInfo && (
            <div className='mt-5 flex flex-col items-center text-2xl font-semibold'>
              <h3 className='text-3xl font-bold'>Weather in <span className='font-bold text-yellow-400'>{weatherInfo.name}</span></h3>
              <h3><img className='img w-48' src={imgCloud()} /></h3>
              <h3 className='text-6xl font-bold mb-10'>{Math.round(weatherInfo.main.temp - 273.15)}°C</h3>
              <h3>Feels Like <span className='font-bold text-yellow-300'>{weatherInfo.main.feels_like}</span></h3>
              <h3>Humidity <span className='font-bold text-yellow-300'>{weatherInfo.main.humidity}%</span></h3>
              <h3>Wind <span className='font-bold text-yellow-300'>{weatherInfo.wind.speed}km/h</span></h3>
              <h3>Weather Condition <span className='font-bold text-yellow-300'>{weatherInfo.weather[0].description}</span></h3>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default page


// ================================================================================ 

// // OpenWeatherLink ; https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}
// // APIKey: 791ff8e1867a3b702b46299e2f804181
// // imgCloud : https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png
// // imgSunny : https://i.pinimg.com/originals/53/22/c2/5322c2cad533e12e552d0dfdc89b4c25.png
// // imgSnow : https://static.vecteezy.com/system/resources/previews/012/066/500/original/sunny-and-snowy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png
