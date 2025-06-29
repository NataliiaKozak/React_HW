const CityCard = ({ city }) => {
  if (!city) return null

  return (
    <div className="city-card">
      <h3>{city.name}</h3>
      <img src={city.imageUrl} alt={city.name} width="300" />
      <p>{city.description}</p>
      <ul>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  )
}

export default CityCard
