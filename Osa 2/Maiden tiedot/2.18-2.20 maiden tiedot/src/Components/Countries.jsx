import Country from '../Components/Country'
const Countries= (props) => {
    if (props.filteredCountries.length > 10) {
        return <p>Too many matches, specify another filter</p>
}
    if (props.filteredCountries.length > 1 && props.filteredCountries.length <= 10){
    return(
        props.filteredCountries.map((country,name) => (
      <div key={country.cca3}>{country.name.common}
        <button onClick={() => props.setFilter(country.name.common)}>
            Show
          </button>
        </div>
       )))}
    if (props.filteredCountries.length === 1){
          return <Country country={props.filteredCountries[0]} />
}}

    
    

export default Countries