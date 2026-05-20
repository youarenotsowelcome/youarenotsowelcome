export default function DonaPaula({ onBack, onError }) {
  return (
    <div className="page" style={{ backgroundImage: "url('/donapaula.jpg')" }}>
      <button className="back-btn" onClick={onBack}>← Back</button>
      <div style={{ background: 'rgba(255,255,255,0.85)', padding: '24px', borderRadius: '12px' }}>
        <h2>PPWD56 LF48D<br/>Conspiracy Theories</h2>
        <p>For details</p>
        <p style={{ marginTop: '16px' }}>
          <span
            onClick={onError}
            style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
          >
            click here
          </span>
        </p>
      </div>
    </div>
  )
}
