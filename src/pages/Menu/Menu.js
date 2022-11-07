import React from 'react'
import './Menu.css'

import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="main">
      <h2>Nossas Matrizes</h2>
      <p>Escolha para qual matriz seguir</p>
      <div className="menu-links">
        <Link id="links" to="/olinda">
          Olinda
        </Link>
        <Link id="links" to="/viana">
          Viana
        </Link>
        <Link id="links" to="/matinha">
          Matinha
        </Link>
      </div>
      <p>
        <Link id="return" to="/">
          Voltar
        </Link>
      </p>
    </div>
  )
}

export default Menu
