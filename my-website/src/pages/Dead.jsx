import bgImage from '/dead.jpeg'

export default function Dead({ onBack }) {
  return (
    <div className="page" style={{ backgroundImage: `url(${bgImage})` }}>
      <button className="back-btn" onClick={onBack}>← Back</button>
      <div style={{ background: 'rgba(255,255,255,0.85)', padding: '24px', borderRadius: '12px' }}>
        <h2>DEAD</h2>
        <a href="/dead.pdf" download>
          <button className="download-btn">Download PDF</button>
        </a>
      </div>
    </div>
  )
}