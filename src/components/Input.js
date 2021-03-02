import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {loadWeather} from '../redux/action'
import SearchIcon from '@material-ui/icons/Search';
import '../css/input.css'


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
        setSearchCity('')
        console.log('submit')
    }
    

    return (
        <div>
            <div className="search-box">
                <form onSubmit={onSubmitHandler}>
                    <input onChange={onChangeHandler} className="search-bar" type="text" placeholder="Search 'Tokyo'" value={searchCity}/>
                    <button><SearchIcon className="search-icon"/></button>
                </form>
            </div>
        </div>
    )
}

export default Input   