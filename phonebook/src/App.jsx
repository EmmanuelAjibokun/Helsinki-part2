import { useState, useEffect } from 'react'
import Form from './Form';
import Persons from './Persons';
import Filter from './Filter';

import personServices from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([])
  const [filtered, setFiltered] = useState([]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  useEffect(() => {
    console.log("Effect")
    personServices
      .getAll()
      .then(res => {
        console.log("fulfilled")
        setPersons(res)
      })
  }, [])
  const [searchText, setSearchText] = useState('');

  const handleAddPerson = (e) => {// add to the list of persons
    e.preventDefault();
    const nameExist = persons.find(person => person.name === newName)
    if (nameExist) {
      alert(`${newName} is already added to phonebook.`)
      return;
    }
    const personObj = {
      name: newName,
      number: newNumber
    }
    personServices
      .addPerson(personObj)
      .then(res => {
        return setPersons(persons.concat(res));
      })
      .catch(err => console.log(err))
    
    setNewName('');
    setNewNumber('');
  }

  const findPerson = (e) => {
    setSearchText(e.target.value)
    const matches = persons.filter(person => person.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setFiltered(matches);
  }

  const formProps = {
    handleAddPerson,
    setNewName,
    setNewNumber,
    newName,
    newNumber
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchText={searchText} findPerson={findPerson} />
      <h2>Add a new</h2>
      <Form submitForm={formProps} />
      <h2>Numbers</h2>
      <Persons persons={searchText ? filtered : persons} />
    </div>
  )
}

export default App