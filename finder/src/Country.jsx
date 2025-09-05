import Header from "./Header"
import { useEffect } from "react"
import weatherService from './services/weather';
import { useState } from "react";

const Lang = ({lang}) => {
  return <li>{lang}</li>
}

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    weatherService
      .getWeather(country.capital[0])
      .then(data => {
        console.log("Weather data:", data);
        setWeather(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Header heading={'h1'} title={country.name.common} />
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>
      <Header heading={'h3'} title={'Languages'} />
      <ul>
        
        { // converts the keys of the object to an array
          Object.keys(country.languages).map(key => <Lang key={key} lang={country.languages[key]} />)
        }
      </ul>
      <img src={country.flags.png} alt={`${country.name.common} flag`} />

      <Header heading={'h3'} title={`Weather in ${country.capital[0]}`} />
      <p>Temperature {weather && weather.current.temp_c} Celsius</p>
      <img src={weather && weather.current.condition.icon} alt={weather && weather.current.condition.text} />
      <p>Wind {weather && weather.current.wind_mph} mph</p>
    </div>
  )
}

export default Country