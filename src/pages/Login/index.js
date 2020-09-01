import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Input from '../../components/Forms/Input'
import Button from '../../components/Button'

import api from '../../services/api'

import imgLogo from '../../assets/logo.png'

import './styles.css'

function Login() {
  const [loading, setLoading] = useState(false)
  const [formLogin, setFormLogin] = useState({ email: 'rayza.ocr@gmail.com', password: 'admin123' })
  const history = useHistory()

  async function login() {
    try {
      setLoading(true)
      const { data } = await api.post('/users/login', formLogin)
      setLoading(false)
      
      const token = data.token

      localStorage.setItem('token', token)
      history.push('/home')
    } catch (error) {
      setLoading(false)
      alert(error.response.data.message)
    }
  }

  return (
    <div className="container-login">
      <div className="card-login">
        <img src={imgLogo} alt="Logo" />

        <form>
          <Input
            label="E-mail"
            name="email"
            id="email"
            value={formLogin.email}
            onChange={(event) => setFormLogin({ ...formLogin, email: event.target.value})}
          />

          <Input 
            label="Senha" 
            name="password" 
            id="password" 
            value={formLogin.password} 
            onChange={(event) => setFormLogin({ ...formLogin, password: event.target.value})}
            type="password" 
          />

          <Button disabled={loading} onClick={login} type="button">
            {loading ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
