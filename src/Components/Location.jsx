import { useState } from 'react'
import { useLocation } from './Context/LocationContext';
import Cities from '../Turkey_Cities.json';
import {Button} from 'thunderui';
import 'thunderui/dist/index.css';

function Location() {
  const { location, setLocation } = useLocation();
  const [map, setMap] = useState(`https://www.google.com/maps/@${location.lat},${location.lon},12z`);
  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setLocation({
        "lat": position.coords.latitude,
        "lon": position.coords.longitude
      });
      setMap(`https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},12z`)
    })
  };

  const citiesChanged = (e) => {
    var coords = Cities.find(item => item.id === parseInt(e.target.value)).coord;
    setLocation({
      "lat": coords.lat,
      "lon": coords.lon
    });
    setMap(`https://www.google.com/maps/@${coords.lat},${coords.lon},12z`)
  };

  return (
    <div className='locationMain'>
      <div className='selectArea locationTab'>
        <label htmlFor='cities'>Select A City</label>
        <select name='cities' id='cities' onChange={citiesChanged}>
          {Cities.map((item, index) => (
            <option key={index} value={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
      <div className='locationTab'>
        {/* <Button 
        text="See Location"
        type="text"
        size="small"
        role="link"/>  */}
        <a href={map} target="_blank" rel='noreferrer'>See Location</a>
      </div>
      <div className='locationTab'>
        <Button 
        onClick={handleClick} 
        color="secondary"
        text="Get Weather In My Location"
        type="outline"
        size="small"/>
      </div>
    </div>
  )
}

export default Location