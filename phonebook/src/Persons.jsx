import React from 'react'

const Persons = ({ persons }) => {
  return (
    <div>
        {persons.map((person, index) => <p key={`${person.name}-${index}-${person.id}`}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default Persons