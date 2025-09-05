import React from 'react'
import Country from './Country';

const CountryLIst = ({countries, showCountry}) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  if (countries.length == 1) {
    return <Country country={countries[0]} />
  }
  return (
    <div>
      {
        countries.map(country => <p key={`${country.name.common}-${country.area}`}>{country.name.common} <button onClick={() => showCountry(country.name.common)}>show</button></p>)
      }
    </div>
  )
}

export default CountryLIst