import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {loadWeather} from '../redux/action'


function Input() {
    const dispatch = useDispatch()
    const [searchCity,setSearchCity] = useState("");

    const onChangeHandler = (e) => {
        e.preventDefault();
        setSearchCity(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(loadWeather(searchCity))
        console.log('submit')
    }
    

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input onChange={onChangeHandler} type="text" placeholder="Search..." value={searchCity}/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default Input   