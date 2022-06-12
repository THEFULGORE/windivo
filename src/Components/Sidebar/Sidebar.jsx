import React, { useEffect, useState } from 'react'
import './Sidebar.scss'
import { Spin } from 'antd';
import { getDate } from '../../utils/date';

const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });

const Sidebar = (props) => {
  let [epochDate, setDate] = useState({});

  useEffect(() => {
    if (props.data) {
      let dateData = getDate(new Date(props.data.dt * 1000 + props.data.timezone * 1000));
      setDate(dateData);
    }

  }, [props.data])

  return (
    <div className='sidebar'>
      <div className='sidebar__logo' align='left'>
        <p>windivo</p>
      </div>
      {props.data ?
        <div className='sidebar__info'>
          <h2>{props.data.name}, {regionNamesInEnglish.of(props.data.sys.country)}</h2>
          {epochDate ?
            <span>
              <h2>{epochDate.time} - {epochDate.monthName}</h2>
              <h2>{epochDate.dayName}</h2>
            </span>
            :
            <></>
          }
          <div className='sidebar__temp'>
            <div className='sidebar__celcius'>
              <h2 className='sidebar__celcius-number'>{Math.round(props.data.main.temp)}<sup> o</sup></h2>
            </div>
            <div>
              <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt="" />
              <h2 className='sidebar__celcius-descr'>{props.data.weather[0].description}</h2>
            </div>
          </div>
        </div>
        :
        <Spin />
      }
    </div>
  )
}

export default Sidebar
