import React from 'react'

import Legend from './Legend.css'
import { Link } from 'react-router-dom'

const OlindaLegend = () => {
  return (
    <div className="content-legend">
      <div className="text-legend">
        <h1>Legends</h1>
      </div>
      <div className="figurinhas-legend">
        <div className="grid-legend">
          <div className="figurinha-olinda-legend"></div>
          <div className="figurinha-olinda-legend"></div>
          <div className="figurinha-olinda-legend"></div>
          <div className="figurinha-olinda-legend"></div>
          <div className="figurinha-olinda-legend"></div>
          <div className="figurinha-olinda-legend"></div>
        </div>
        <div className="navigation">
          <Link className="link" to="/olinda">
            Voltar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OlindaLegend
