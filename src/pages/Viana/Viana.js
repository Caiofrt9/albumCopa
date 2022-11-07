import React from 'react'

import './Viana.css'

import { Link } from 'react-router-dom'

const Viana = () => {
  return (
    <div className="content">
      <div className="text">
        <h1>Connect Solutions</h1>
        <h2>Viana</h2>
      </div>
      <div className="figurinhas">
        <div className="figurinha-meio">
          <div className="figurinha-viana"></div>
        </div>
        <div className="grid-viana">
          <div className="figurinha-viana"></div>
          <div className="figurinha-viana"></div>
          <div className="figurinha-viana"></div>
          <div className="figurinha-viana"></div>
          <div className="figurinha-viana"></div>
          <div className="figurinha-viana"></div>
          <div className="figurinha-viana"></div>
          <div className="figurinha-viana"></div>
        </div>
        <div className="navigation">
          <Link className="link" to="/menu">
            Voltar
          </Link>
          <Link className="link" to="/viana/legend">
            Legends
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Viana
