import Header from "./Header"

const Lang = ({lang}) => {
  return <li>{lang}</li>
}

const Country = ({ country }) => {
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
    </div>
  )
}

export default Country