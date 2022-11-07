import React from 'react'
import './Matinha.css'

import { Link } from 'react-router-dom'

const Matinha = () => {
  return (
    <div className="content">
      <div className="text">
        <h1>Connect Solutions</h1>
        <h2>Matinha</h2>
      </div>
      <div className="figurinhas">
        <div className="figurinha-meio">
          <div className="figurinha-matinha"></div>
        </div>
        <div className="grid">
          <div className="figurinha-matinha"></div>
          <div className="figurinha-matinha"></div>
          <div className="figurinha-matinha"></div>
          <div className="figurinha-matinha"></div>
          <div className="figurinha-matinha"></div>
          <div className="figurinha-matinha"></div>
          <div className="figurinha-matinha"></div>
          <div className="figurinha-matinha"></div>
        </div>
        <div className="navigation">
          <Link className="link" to="/menu">
            Voltar
          </Link>
          <Link className="link" to="/matinha/legend">
            Legends
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Matinha
