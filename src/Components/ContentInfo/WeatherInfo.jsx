import React from 'react'
import './WeatherInfo.scss'

const WeatherInfo = (props) => {
    return (
        <div className='weatherInfo'>
            <div className={props.nameOfClass}>
                <h3 className='weatherInfo__title'>{props.type}</h3>
                <h3 className='weatherInfo__data'>{props.data}{props.measure}</h3>
            </div>
        </div>
    )
}

export default WeatherInfo
