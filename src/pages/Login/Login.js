import { useState } from 'react'

import { Link } from 'react-router-dom'

import './Login.css'

const Login = () => {
  function onSubmit(userData) {
    console.log(userData)
  }

  return (
    <div className="main">
      <h2>Sticker Album</h2>
      <p className="subtitle">Entre para ver as figurinhas</p>

      <form onSubmit={''}>
        <label>
          Nome
          <input placeholder="insira seu email." />
        </label>

        <label>
          Senha
          <input placeholder="insira sua senha" />
        </label>

        <input type="submit" value="Entrar" required />

        <p>
          Não tem uma conta?{' '}
          <Link id="span" to="/menu">
            Clique aqui
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
