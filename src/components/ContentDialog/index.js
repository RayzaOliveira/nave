import React from 'react'

import iconClose from '../../assets/icons/close-icon.png'

import './styles.css'

const ContentDialog = ({ title, description, onClose }) => {

  return (
    <div className="content-dialog">
      <button onClick={onClose}>
        <img src={iconClose} alt="Fechar" />
      </button>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default ContentDialog
