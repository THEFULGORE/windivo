import React from 'react'
import Chart from './Chart';
import './ContentInfo.scss'
import SearchBar from './SearchBar/SearchBar';
import WeatherInfo from './WeatherInfo';

const ContentInfo = (props) => {
  return (
    <div className='contentContainer'>
      <div className='contentInfo'>
        <SearchBar setLocation={props.setLocation} />
        <div className='chart'>
          <Chart forecast={props.forecast} />
        </div>
        {props.data ?
          <div className='weatherDetails'>
            <WeatherInfo nameOfClass='weatherInfo__atmos' type='Atmospheric pressure' data={props.data.main.pressure} measure=' hPa' />
            <WeatherInfo nameOfClass='weatherInfo__humidity' type='Humidity' data={props.data.main.humidity} measure=' %' />
            <WeatherInfo nameOfClass='weatherInfo__visibility' type='Visibility' data={props.data.visibility} measure=' m' />
            <WeatherInfo nameOfClass='weatherInfo__wind' type='Wind' data={props.data.wind.speed} measure=' m/s' />
            <WeatherInfo nameOfClass='weatherInfo__cloudiness' type='Cloudiness' data={props.data.clouds.all} measure=' %' />
            <WeatherInfo nameOfClass='weatherInfo__rain' type='Rain' data={props.data.rain ? props.data.rain['1h'] : '0'} measure=' mm' />
          </div>
          :
          <></>
        }
      </div>
    </div>
  )
}

export default ContentInfo
