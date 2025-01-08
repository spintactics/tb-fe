import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PositionsPage from "./pages/PositionsPage"

import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path = '/' element={<PositionsPage />} />
        <Route path = '/positions' element={<PositionsPage />} />
      </Routes>
    </Router>
  )
}

export default App
