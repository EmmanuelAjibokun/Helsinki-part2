import { useState } from "react"
import Finder from "./Finder"
import finderService from './services/findCountry';
import { filterSearch } from './services/utils';
import { useEffect } from "react";
import CountryLIst from "./CountryLIst";

function App() {
  const [searchText, setSearchText] = useState('');
  const [countries, setCountries] = useState('');
  const [filteredSearch, setFilteredSearch] = useState([]);

  useEffect(() => {
    finderService
      .getAll()
      .then(data => {
        console.log('fulfilled')
        setCountries(data)
      })
      .catch(err => console.error(err))
  }, [])

  const handleSearch = e => {
    console.log(e.target.value)
    setSearchText(e.target.value)
    const filter = filterSearch(countries, e.target.value);
    setFilteredSearch(filter);
  }

  const handleShowCountry = country => {
    const filter = filterSearch(countries, country);
    setFilteredSearch(filter);
  }

  return (
    <div>
      <Finder searchText={searchText} search={handleSearch} />
      {console.log(filteredSearch)}
      <CountryLIst countries={filteredSearch} showCountry={handleShowCountry} />
    </div>
  )
}

export default App
