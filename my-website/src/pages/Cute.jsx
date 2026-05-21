import bgImage from '/cute.jpg'

export default function Cute({ onBack }) {
  return (
    <div className="page" style={{ backgroundImage: `url(${bgImage})` }}>
      <button className="back-btn" onClick={onBack}>← Back</button>
      <div style={{ background: 'rgba(255,255,255,0.85)', padding: '24px', borderRadius: '12px' }}>
        <h2>CUTE</h2>
        <a href="/cute.pdf" download>
          <button className="download-btn">Download PDF</button>
        </a>
      </div>
    </div>
  )
}
