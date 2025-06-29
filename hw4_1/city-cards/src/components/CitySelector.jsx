import React, { useState } from 'react'
import { citiesData } from '../citys.js'

const CitySelector = ({ onSelectCity }) => {
  

  const [selectedCityName, setSelectedCityName] = useState('')

  const handleChange = (e) => {
    const cityName = e.target.value
    setSelectedCityName(cityName)

    // Находим город и отправляем его в App.js
    const selectedCity = citiesData.find((city) => city.name === cityName)
    onSelectCity(selectedCity)
  }

  return (
    <div className="city-selector">
      <h2 style={{ textAlign: 'center' }}>Выберите город:</h2>
      <select value={selectedCityName} onChange={handleChange}>
        <option value="">-- Выберите город --</option>
        {citiesData.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CitySelector