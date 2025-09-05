import React from 'react'

const Finder = ({searchText, search}) => {
  return (
    <div>
        <p>find countries <input value={searchText} onChange={search} /></p>

    </div>
  )
}

export default Finder