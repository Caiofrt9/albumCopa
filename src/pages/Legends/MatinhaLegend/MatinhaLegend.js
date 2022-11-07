import React from 'react'

import './MatinhaLegend.css'
import { Link } from 'react-router-dom'

const MatinhaLegend = () => {
  return (
    <div className="content-legend">
      <div className="text-legend">
        <h1>Legends</h1>
      </div>
      <div className="figurinhas-legend">
        <div className="grid-legend">
          <div className="figurinha-matinha-legend"></div>
          <div className="figurinha-matinha-legend"></div>
          <div className="figurinha-matinha-legend"></div>
          <div className="figurinha-matinha-legend"></div>
          <div className="figurinha-matinha-legend"></div>
          <div className="figurinha-matinha-legend"></div>
        </div>
        <div className="navigation">
          <Link className="link" to="/matinha">
            Voltar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MatinhaLegend
