import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('');

  const handleAddPerson = (e) => {
    e.preventDefault();
    const nameExist = persons.find(person => person.name === newName)
    if (nameExist) {
      alert(`${newName} is already added to phonebook.`)
      return;
    }
    const personObj = {
      name: newName
    }
    setPersons(persons.concat(personObj));
    setNewName('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person, index) => <p key={`${person.name}-${index}`}>{person.name}</p>)}
      </div>
    </div>
  )
}

export default App