import React from 'react'
import { useHistory, Link } from 'react-router-dom'

import imgLogo from '../../assets/logo.png'

import './styles.css'

const Header = () => {
  const history = useHistory()

  function logout() {
    localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <header id="header-common">
      <Link to="/home">
        <img src={imgLogo} alt="Logo" /> 
      </Link>
      <button onClick={logout}>
        Sair
      </button>
    </header>
  )
}

export default Header
