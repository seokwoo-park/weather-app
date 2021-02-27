import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function WeatherInfo() {
    const weather = useSelector(state => state.weather)
    console.log(weather)

    // useEffect(()=>{
    //     weather? console.log('no') : console.log(weather)
    // })

    return (


        <div>
                    <h1>current Temp : {weather.temp}</h1>
                    <h2>Location : {weather.location}</h2>
                    <h2>Today's weather : {weather.desc}</h2>

        </div>
    )
}

export default WeatherInfo
