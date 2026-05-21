import bgImage from '/horcrux.jpg'

export default function Horcrux({ onBack }) {
  return (
    <div className="page" style={{ backgroundImage: `url(${bgImage})` }}>
      <button className="back-btn" onClick={onBack}>← Back</button>
      <div style={{ background: 'rgba(255,255,255,0.85)', padding: '24px', borderRadius: '12px' }}>
        <p>A Horcrux is a dark magical object used to hide a fragment of a witch or wizard's soul, making them immortal as long as it exists. Voldemort created seven of them.</p>
        <a href="/horcrux.pdf" download>
          <button className="download-btn">Download PDF</button>
        </a>
      </div>
    </div>
  )
}