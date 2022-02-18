import React, { useState, useEffect } from 'react'
import './WeatherDetail.css';
import { GetDate } from '../../Helpers/Date';
import moonPhase from '../../assets/img/moon-phase.jfif';
function WeatherDetail({ detail, setDetail, setSelected }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    console.log(detail);
    //ilk başta null ise detay kısmı gözükmesin diye
    if (detail !== null) {
      setVisible(true);
    }
    else {
      setVisible(false);
    }
  }, [detail]);
  return (
    <div className={`detailMain ${!visible ? "d-none" : ""}`}>
      <div className='detailHeader'>
        <h3 className='detailTitle'>{detail?.weather[0]?.description}</h3>
        <button onClick={() => { setVisible(false); setDetail(null); setSelected(-1) }}>X</button>
      </div>
      <div className='detailBody'>
        <div className='detailCard'>
          <div className='detailCardTitle'>
            <h4>Times</h4>
          </div>
          <div className='detailRow'>
            <span>Forecast Time</span>
            <b>{`${GetDate(detail?.dt).getHours()}:${GetDate(detail?.dt).getMinutes()}`}</b>
          </div>
          <div className='detailRow'>
            <span>Sunrise</span>
            <b>{`${GetDate(detail?.sunrise).getHours()}:${GetDate(detail?.sunrise).getMinutes()}`}</b>
          </div>
          <div className='detailRow'>
            <span>Sunset</span>
            <b>{`${GetDate(detail?.sunset).getHours()}:${GetDate(detail?.sunset).getMinutes()}`}</b>
          </div>
          <div className='detailRow'>
            <span>Moonrise</span>
            <b>{`${GetDate(detail?.moonrise).getHours()}:${GetDate(detail?.moonrise).getMinutes()}`}</b>
          </div>
          <div className='detailRow'>
            <span>Moonset</span>
            <b>{`${GetDate(detail?.moonset).getHours()}:${GetDate(detail?.moonset).getMinutes()}`}</b>
          </div>
          <div className='detailRow'>
            <span>Moon phase&nbsp;
              <div className='tooltip'>&#8505;
                <span className='tooltiptext'>
                  <img src={moonPhase} alt="0 and 1 are 'new moon', 0.25 is 'first quarter moon', 0.5 is 'full moon' and 0.75 is 'last quarter moon'" />
                  <p>Moon phase. 0 and 1 are 'new moon', 0.25 is 'first quarter moon', 0.5 is 'full moon' and 0.75 is 'last quarter moon'.
                    The periods in between are called 'waxing crescent', 'waxing gibous', 'waning gibous', and 'waning crescent', respectively.</p>
                </span>
              </div>
            </span>

            <b>{detail?.moon_phase}</b>
          </div>
        </div>

        <div className='detailCard'>
          <div className='detailCardTitle'>
            <h4>Weather</h4>
          </div>
          <div className='detailRow'>
            <span>Clouds</span>
            <b>{detail?.clouds}%</b>
          </div>
          <div className='detailRow'>
            <span>Precipitation</span>
            <b>{Math.round(detail?.pop *100)}%</b>
          </div>
          {
            detail?.rain &&
            <div className='detailRow'>
              <span>Precipitation volume</span>
              <b>{detail?.rain} mm</b>
            </div>
          }
          {
            detail?.snow &&
            <div className='detailRow'>
              <span>Snow volume</span>
              <b>{detail?.snow} mm</b>
            </div>
          }
          <div className='detailRow' title='Atmospheric pressure on the sea level'>
            <span>Preasure</span>
            <b>{detail?.pressure} hPa</b>
          </div>
          <div className='detailRow'>
            <span>Humidity</span>
            <b>{detail?.humidity}%</b>
          </div>
          <div className='detailRow'>
            <span>Max UV</span>
            <b>{detail?.uvi}</b>
          </div>
          <div className='detailRow'>
            <span>Wind speed</span>
            <b>{detail?.wind_speed} m/s</b>
          </div>
          {
            detail?.wind_gust &&
            <div className='detailRow'>
              <span>Wind gust</span>
              <b>{detail?.wind_gust} m/s</b>
            </div>
          }

          <div className='detailRow'>
            <span>Wind direction</span>
            <b>{detail?.wind_deg}°</b>
          </div>
        </div>

        <div className='detailCard'>
          <div className='detailCardTitle'>
            <h4>Temperature</h4>
          </div>
          <div className='detailRow'>
            <span>Atmospheric temp</span>
            <b>{detail?.dew_point}°C</b>
          </div>
          <div className='detailRow'>
            <span>Morning</span>
            <b>{detail?.temp?.morn?.toFixed(1)}°C</b>
          </div>
          <div className='detailRow'>
            <span>Day</span>
            <b>{detail?.temp?.day?.toFixed(1)}°C</b>
          </div>
          <div className='detailRow'>
            <span>Evening</span>
            <b>{detail?.temp?.eve?.toFixed(1)}°C</b>
          </div>
          <div className='detailRow'>
            <span>Night</span>
            <b>{detail?.temp?.night?.toFixed(1)}°C</b>
          </div>
          <div className='detailRow'>
            <span>Min</span>
            <b>{detail?.temp?.min?.toFixed(1)}°C</b>
          </div>
          <div className='detailRow'>
            <span>Max</span>
            <b>{detail?.temp?.max?.toFixed(1)}°C</b>
          </div>
        </div>

        <div className='detailCard'>
          <div className='detailCardTitle'>
            <h4>Feels Like Temperature</h4>
          </div>
          <div className='detailRow'>
            <span>Morning</span>
            <b>{detail?.feels_like?.morn?.toFixed(1)}°C</b>
          </div>
          <div className='detailRow'>
            <span>Day</span>
            <b>{detail?.feels_like?.day?.toFixed(1)}°C</b>
          </div>
          <div className='detailRow'>
            <span>Evening</span>
            <b>{detail?.feels_like?.eve?.toFixed(1)}°C</b>
          </div>
          <div className='detailRow'>
            <span>Night</span>
            <b>{detail?.feels_like?.night?.toFixed(1)}°C</b>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(WeatherDetail);