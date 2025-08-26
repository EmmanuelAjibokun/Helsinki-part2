import React from 'react'

const Persons = ({ persons }) => {
  return (
    <div>
        {persons.map((person, index) => <p key={`${person.name}-${index}`}>{person.name}</p>)}
    </div>
  )
}

export default Persons