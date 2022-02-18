import React, { useState, useEffect } from 'react'
import { useWeather } from './Context/WeatherContext';
import Card from './Card/Card';
import WeatherDetail from './WeatherDetail/WeatherDetail';
function Forecasts() {
    const { weather } = useWeather();
    const [detail, setDetail] = useState(null);
    const [selected, setSelected] = useState(-1);
    useEffect(() => {
        setSelected(-1);
        setDetail(null);
    }, [weather]);
    return (
        <>
            <div className='forecastsMain'>
                {weather && weather.daily.map((item, index) => (
                    <div className='cardMain' key={index} onClick={() => { setDetail(item); setSelected(index) }}>
                        <Card
                            weather={{
                                "dt": item.dt,
                                "icon": item.weather[0].icon,
                                "iconMain": item.weather[0].main,
                                "iconDesc": item.weather[0].description,
                                "tempMin": item.temp.min,
                                "tempMax": item.temp.max
                            }}
                            selected={index === selected ? "selected-weather" : ""}
                            current={index === 0 ? "today-weather" : ""} />
                    </div>
                ))}
            </div>
            <WeatherDetail detail={detail} setDetail={setDetail} setSelected={setSelected} />
        </>
    )
}

export default React.memo(Forecasts);