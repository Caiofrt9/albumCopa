import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

//Pages
import Login from './pages/Login/Login'
import Menu from './pages/Menu/Menu'

//Matrizes
import Matinha from './pages/Matinha/Matinha'
import Olinda from './pages/Olinda/Olinda'
import Viana from './pages/Viana/Viana'
//Legend
import OlindaLegend from './pages/Legends/OlindaLegend/OlindaLegend'
import MatinhaLegend from './pages/Legends/MatinhaLegend/MatinhaLegend'
import VianaLegend from './pages/VianaLegend/VianaLegend'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<Menu />} />

          <Route path="/matinha/legend" element={<MatinhaLegend />} />
          <Route exact path="/matinha" element={<Matinha />} />

          <Route exact path="/olinda" element={<Olinda />} />
          <Route path="/olinda/legend" element={<OlindaLegend />} />

          <Route exact path="/viana" element={<Viana />} />
          <Route path="/viana/legend" element={<VianaLegend />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
