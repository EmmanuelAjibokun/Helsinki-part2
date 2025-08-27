import React from 'react'

const Filter = ({findPerson, searchText}) => {
  return (
    <div>
      filter shown with <input onChange={findPerson} value={searchText} />
    </div>
  )
}

export default Filter