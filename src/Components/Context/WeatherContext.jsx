import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from './LocationContext';
//create context
const WeatherContext = createContext();

//get isteğinde olmasını istemediğin yapıları çıkar. dakikalık ve saatlik hava durumu bilgisini istemiyorum
const part = "current,minutely,hourly,alerts";

//hava durumu verilerini çekip providerımızı oluşturduğumuz kısım
export const WeatherProvider = ({ children }) => {
    //lokasyon bilgilerini al
    const { location } = useLocation();
    const [weather, setWeather] = useState(null);
    //&lang=tr isteğe bağlı dili değiştirebilirsin
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=${part}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}&units=metric`)
            .then(resp => resp.json())
            .then(json => setWeather(json))
    }, [location]);

    const values = {
        weather,
        setWeather
    }
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext);