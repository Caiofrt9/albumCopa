import React from 'react'

import './Olinda.css'
import { Link } from 'react-router-dom'

const Olinda = () => {
  return (
    <div className="content">
      <div className="text">
        <h1>Connect Solutions</h1>
        <h2>Olinda</h2>
      </div>
      <div className="figurinhas">
        <div className="figurinha-meio">
          <div className="figurinha-olinda"></div>
        </div>
        <div className="grid">
          <div className="figurinha-olinda"></div>
          <div className="figurinha-olinda"></div>
          <div className="figurinha-olinda"></div>
          <div className="figurinha-olinda"></div>
          <div className="figurinha-olinda"></div>
          <div className="figurinha-olinda"></div>
          <div className="figurinha-olinda"></div>
          <div className="figurinha-olinda"></div>
        </div>
        <div className="navigation">
          <Link className="link" to="/menu">
            Voltar
          </Link>
          <Link className="link" to="/olinda/legend">
            Legends
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Olinda
