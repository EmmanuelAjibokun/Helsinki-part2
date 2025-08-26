import { useState } from 'react'
import Form from './Form';
import Persons from './Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

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

  const formProps = {
    handleAddPerson,
    setNewName,
    setNewNumber,
    newName,
    newNumber
  }

  return (
    <div>
      {console.log(persons)}
      <h2>Add a new</h2>
      <Form submitForm={formProps} />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App