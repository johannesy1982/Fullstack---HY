import { useState, useEffect } from 'react'
import weatherService from '../Services/weather'
const Country = ({country}) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
    weatherService
    .getWeather(country.capital[0])
    .then(response => setWeather(response.data))
}, [country])
    return(
        <div>
        <h1>{country.name.common}</h1>
        <p>Capital {country.capital}</p>
        <p>Area {country.area}</p>
        
        <h2>Languages</h2>
        <ul>{Object.values(country.languages).map(language =>
        <li key={language}>{language}</li>)}</ul>
        <img src={country.flags.png}
        alt={country.flags.alt} />
        {weather && (
        <>
          <h2>Weather in {country.capital[0]}</h2>
          <p>Temperature {weather.main.temp} °C</p>
        </>
      )}
    </div>
  
       
    )}
export default Country
