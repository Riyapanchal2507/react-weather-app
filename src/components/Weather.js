import React, { useEffect, useState } from 'react';
import './Weather.css'
import Weathercard from './Weathercard';

const Myapplication = () => {
    const [searchValue, setsearchValue] = useState("Bundi");
    const [tempInfo, setTempInfo] = useState({});
    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=f2aef34ca802ebc37819598e0b83c8f0`;

            let res = await fetch(url);
            let data = await res.json();

            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;
            
            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            };
            setTempInfo(myNewWeatherInfo);
        }
        catch (error) {
           alert("invalid city name");
        }
    };
    
    useEffect(() => {
        getWeatherInfo();
    }, []);
    
    return (
        <>
            <div className='search'>
                <div className='search-box'>
                    <input type="text" placeholder='search weather...' value={searchValue} onChange={(e) => setsearchValue(e.target.value)} />
                    
                    <button onClick={getWeatherInfo}>Search</button>
                </div>
                <Weathercard tempInfo = {tempInfo} />
            </div>
        </>
    );
};

export default Myapplication
