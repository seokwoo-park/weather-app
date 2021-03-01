import React from 'react'
import '../css/BackgroundNight.css'
import forest from '../forest.png'

function BackgroundNight() {

    return (
        <div className="background-night">
            <div className="bg-night-moon"></div>
            <img className="bg-night-forest" src={forest}/>
        </div>
    )
}

export default BackgroundNight
