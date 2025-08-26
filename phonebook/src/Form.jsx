import React from 'react'
import Input from './Input';

const Form = ({submitForm}) => {
  const {handleAddPerson, setNewName, setNewNumber, newName, newNumber} = submitForm;

  return (
    <form onSubmit={handleAddPerson}>
      <div>
        name: <Input setValue={setNewName} value={newName} />
      </div>
      <div>
        number: <Input setValue={setNewNumber} value={newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Form