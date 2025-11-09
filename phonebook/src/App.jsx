import { useState, useEffect } from 'react'
import Form from './Form';
import Persons from './Persons';
import Filter from './Filter';
import Notification from './Notification';

import personServices from './services/persons';

const App = () => {
  // advice: set up a system to invalidate this saved frontend persons list, to avoid stale data
  const [persons, setPersons] = useState([])
  const [filtered, setFiltered] = useState([]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const [errMessage, setErrMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

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
    const personObj = {
      name: newName,
      number: newNumber
    }
    if (nameExist) {
      confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      const newPerson = {...personObj, id: nameExist.id};

      personServices
        .updatePerson(newPerson)
        .then(res => {
          const filtered = persons.filter(person => person.id !== newPerson.id);
          return setPersons(filtered.concat(res));
        })
      
      return;
    }
    personServices
      .addPerson(personObj)
      .then(res => {
        setSuccessMessage(`Added ${res.name}`);
        setTimeout(() => setSuccessMessage(null), 3000);
        return setPersons(persons.concat(res));
      })
      .catch(err => {
        const errMsg = err?.response?.data?.error
        setErrMessage(errMsg);
        setTimeout(() => setErrMessage(null), 3000);
      })
    
    setNewName('');
    setNewNumber('');
  }

  const handleDeletePerson = id => {
    console.log(id)
    const person = persons.find(person => person.id == id)
    confirm(`Delete ${person.name}`)
    personServices
      .deletePerson(id)
      .then(res => {
        const filtered = persons.filter(person => person.id !== res.id)
        setPersons(filtered)
      })
      .catch(err => {
        if (err.status == 404) {
          const filtered = persons.filter(item => item.id !== person.id)
          setPersons(filtered)
          setErrMessage(`Information of ${person.name} has already been removed from server`)
          setTimeout(() => setErrMessage(null), 5000);
        }
      })
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
      <Notification message={successMessage} style={"success"} />
      <Notification message={errMessage} style={"error"} />
      <Filter searchText={searchText} findPerson={findPerson} />
      <h2>Add a new</h2>
      <Form submitForm={formProps} />
      <h2>Numbers</h2>
      <Persons persons={searchText ? filtered : persons} handleDelete={handleDeletePerson} />
    </div>
  )
}

export default App