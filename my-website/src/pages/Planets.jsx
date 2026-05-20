export default function Planets({ onBack }) {
  return (
    <div className="page" style={{ backgroundImage: "url('/planets.jpg')" }}>
      <button className="back-btn" onClick={onBack}>← Back</button>
      <div style={{ background: 'rgba(255,255,255,0.85)', padding: '24px', borderRadius: '12px' }}>
      <h2>PLANETS</h2>
      <a href="/planets.pdf" download>
        <button className="download-btn">Download PDF</button>
      </a>
      </div>
    </div>
  )
}
