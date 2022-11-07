import React from 'react'

import './VianaLegend.css'

import { Link } from 'react-router-dom'

const VianaLegend = () => {
  return (
    <div className="content-legend">
      <div className="text-legend">
        <h1>Legends</h1>
      </div>
      <div className="figurinhas-legend">
        <div className="grid-legend">
          <div className="figurinha-viana-legend"></div>
          <div className="figurinha-viana-legend"></div>
          <div className="figurinha-viana-legend"></div>
          <div className="figurinha-viana-legend"></div>
          <div className="figurinha-viana-legend"></div>
          <div className="figurinha-viana-legend"></div>
        </div>
        <div className="navigation">
          <Link className="link" to="/viana">
            Voltar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default VianaLegend
