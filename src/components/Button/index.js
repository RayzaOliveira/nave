import React from 'react'

import './styles.css'

const Button = ({ children, onClick, ...rest }) => {

  return (
    <button className="btn-primary" onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default Button
