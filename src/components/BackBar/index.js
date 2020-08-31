import React from 'react'
import { Link } from 'react-router-dom'

import iconArrowBack from '../../assets/icons/arrow-icon.png'

import './styles.css'

const BackBar = ({ title }) => {
  return (
    <div className="back-bar">
      <Link to="/home">
        <img src={iconArrowBack} alt={title} />
      </Link>
      <h3>{title}</h3>
    </div>
  )
}

export default BackBar
