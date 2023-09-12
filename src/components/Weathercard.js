import React from 'react'
const Weathercard = ({tempInfo}) => {   
            const {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            } = tempInfo;

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr =`${date.getHours()}:${date.getMinutes()}`
  return (
    <>
       <div className="weather-body">
            <div className="weather-box">
                <p className="temprature">{temp}<sup>°C</sup><span>{weathermood}</span></p>
                  <p className="description"> {name}, {country}</p>
            </div>
              
            <div className="weatherInfo">
                <div className='sunset'>
                    <i className="fa-solid fa-sun"></i>
                    <div className='text'>
                        <span id="wind-speed">Sunset</span>
                        <p>{timeStr}PM</p>
                    </div>
                  </div>
                  
                <div className="humidity">
                    <i className="fa-solid fa-droplet"></i>
                    <div className="text">
                        <span id="humidity-level">humidity</span>
                        <p>{humidity}%</p>
                    </div>
                </div>
                  
                <div className="wind">
                    <i className="fa-solid fa-wind"></i>
                    <div className="text">
                        <span id="wind-speed">Wind-Speed</span>
                        <p>{speed}KM/H</p>
                    </div>
                  </div>
                  
                <div className='pressure'>
                    <i className="fa-solid fa-droplet"></i>
                    <div className='text'>
                        <span id="wind-speed">Pressure</span>
                        <p>{pressure}MM</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Weathercard
