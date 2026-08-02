import { useState,useEffect } from 'react'
import Filter from './Components/Filter'
import Countries from './Components/Countries'
import axios from 'axios'
import countryService from './Services/countries'
import weatherService from './Services/weather'
const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  useEffect(() => {
    countryService
    .getAll()
    .then(initialCountries => {
    setCountries(initialCountries)
  })
  }, [])

 const filteredCountries = countries.filter(country =>
  country.name.common.toLowerCase().includes(filter.toLowerCase())
)

  return (
    <div>
      <Filter filter={filter} filterChange={(event) => setFilter(event.target.value)}/>
  
      <Countries filteredCountries={filteredCountries} setFilter={setFilter} />
      
    </div>
  )
}
export default App