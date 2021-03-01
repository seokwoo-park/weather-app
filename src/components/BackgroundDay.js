import React from 'react'
import '../css/BackgroundDay.css'
import forest from '../forest.png'


function BackgroundDay() {
    return (
        <div className="background-day">
            <div className="bg-day-sun"></div>
            <img className="bg-day-forest" src={forest}/>
        </div>
    )
}

export default BackgroundDay
