import weather_API from'../API/weather-api'
import axios from 'axios'

export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS'
export const FETCH_WEATHER_FAIL = 'FETCH_WEATHER_FAIL'

export const fetchWeather = (weather)=>{
    return {
        type : FETCH_WEATHER_SUCCESS,
        payload : weather
    }
}

export const failWeather = () => {
    return {
        type : FETCH_WEATHER_FAIL
    }
}

export const loadWeather = (city) => async(dispatch)=>{
       await axios.post(`${weather_API.base}weather?q=${city}&appid=${weather_API.key}&units=metric`)
        .then((res)=>{
        console.log(res.data)
        const response = {
            ...res.data.main,
            icon: res.data.weather[0].icon,
            desc: res.data.weather[0].description,
            main: res.data.weather[0].main,
            location:`${res.data.name}, ${res.data.sys.country}`
            
        }
        dispatch(fetchWeather(response))
    })
        console.log('loadWeather action')
}