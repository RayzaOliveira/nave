import React from 'react'

import './styles.css'

const Input = ({ label, name, id, ...rest }) => {
  
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input name={name} id={id} {...rest} />
    </div>
  )
}

export default Input
