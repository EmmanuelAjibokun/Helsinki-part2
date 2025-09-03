import React from "react";

const Persons = ({ persons, handleDelete }) => {
  console.log(persons);
  return (
    <div>
      {persons.map((person, index) => {
        return (
          <div key={`${person.name}-${index}-${person.id}`}>
            <span>
              {person.name} {person.number}
            </span>
            <button style={{ marginLeft: "10px" }} onClick={() => handleDelete(person.id)}>delete</button>
          </div>
        )
      })}
    </div>
  );
};

export default Persons;
