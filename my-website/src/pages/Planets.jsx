export default function Planets({ onBack }) {
  return (
    <div className="page">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <h2>Planets</h2>
      <p>Our solar system has 8 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Each one is unique in size, atmosphere, and distance from the Sun.</p>
    </div>
  )
}
