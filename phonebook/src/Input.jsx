import React from 'react'

const Input = ({ value, setValue, type="text"}) => {
  return <input value={value} onChange={(e) => setValue(e.target.value)} type={type} />
}

export default Input