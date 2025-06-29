import React, { useState } from 'react'
import CitySelector from './components/CitySelector.jsx'
import CityCard from './components/CityCard.jsx'
import './App.css'

function App() {
  const [selectedCity, setSelectedCity] = useState(null)

  return (
    <div className="App">
      <CitySelector onSelectCity={setSelectedCity} />
      <CityCard city={selectedCity} />
    </div>
  )
}

export default App
