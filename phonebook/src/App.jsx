import { useState } from 'react'
import Form from './Form';
import Persons from './Persons';
import Input from './Input';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 }
  ])
  const [filtered, setFiltered] = useState([]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleAddPerson = (e) => {
    e.preventDefault();
    const nameExist = persons.find(person => person.name === newName)
    if (nameExist) {
      alert(`${newName} is already added to phonebook.`)
      return;
    }
    const personObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(personObj));
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
      <div>
        filter shown with <input onChange={findPerson} value={searchText} />
      </div>
      <h2>Add a new</h2>
      <Form submitForm={formProps} />
      <h2>Numbers</h2>
      <Persons persons={searchText ? filtered : persons} />
    </div>
  )
}

export default App