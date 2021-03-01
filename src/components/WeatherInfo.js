import React from 'react'
import { useSelector } from 'react-redux'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import '../css/weatherInfo.css'

function WeatherInfo() {
    const weather = useSelector(state => state.weather)
    console.log(Object.keys(weather))

    const dateBuilder = () => {
        const days = ["Sun","Mon","Tues","Wed","thurs","Fri","Sat"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let currentDate = new Date();
        let day = days[currentDate.getDay()];
        let date = currentDate.getDate();
        let month = months[currentDate.getMonth()];
        let year = currentDate.getFullYear();
        
        return `${day} ${date} ${month} ${year}`
    }
    

    return (


        <div className="weatherInfo-container">
            {
                Object.keys(weather).length >=1 ?
                <div>
                    <div className="date-box">{dateBuilder()}</div>
                    <div className="location-box"><LocationOnIcon/>{weather.location}</div>
                    <div className="temp-box">{weather.temp}°C</div>
                    <div className="weather-box">{weather.desc}</div>
                    <img className="weather-icon" src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`}/>
                </div>
                : null
            }
        </div>

    )
}

export default WeatherInfo
