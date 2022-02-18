import React from 'react'
import './Card.css'
import { GetDate } from '../../Helpers/Date';
function Card({ weather, current, selected }) {
  return (
    <div className={`card ${selected} ${current}`}>
      <div className='card-body'>
        <h3 className='card-title'>
          {GetDate(weather.dt, { weekday: 'short' })}
        </h3>
        <div className='card-img'>
          <img title={`${weather.iconMain}`} src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={`${weather.iconDesc}`} />
        </div>
        <div className='card-footer'>
          <span className='temp-max'>{(weather.tempMax).toFixed(0)}°C</span>
          <span className='seperator'>/</span>
          <span className='tem-min'>{(weather.tempMin).toFixed(0)}°C</span>
        </div>
      </div>
    </div>
  )
}
export default React.memo(Card);