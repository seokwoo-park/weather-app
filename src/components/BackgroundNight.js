import React from 'react'
import '../css/BackgroundNight.css'
import forest from '../forest.png'
import cloud1 from '../cloud1.png'
import cloud2 from '../cloud2.png'
import cloud3 from '../cloud3.png'

function BackgroundNight() {

    return (
        <div className="background-night">
            <div className="bg-night-moon"></div>
            <img className="bg-night-forest" src={forest}/>
            <img className="x1" src={cloud1}/>
            <img className="x2" src={cloud2}/>
            <img className="x3" src={cloud3}/>
            <img className="x4" src={cloud1}/>
            <img className="x5" src={cloud2}/>
            <img className="x6" src={cloud3}/>
        </div>
    )
}

export default BackgroundNight
