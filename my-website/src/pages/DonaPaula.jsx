import bgImage from '/donapaula.jpeg'

export default function DonaPaula({ onBack, onError }) {
  return (
    <div className="page" style={{ 
      backgroundImage: `url(${bgImage})`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      minHeight: '100vh'
    }}>
      <button className="back-btn" onClick={onBack} style={{ position: 'absolute', top: '24px', left: '24px' }}>← Back</button>

      <h2 style={{ 
        fontFamily: 'Nosifer, cursive',
        fontSize: '64px',
        color: '#fff',
        textAlign: 'center',
        textShadow: '3px 3px 10px rgba(0,0,0,0.9)',
        letterSpacing: '4px',
        marginBottom: '20px'
      }}>
        PPWD56 LF48D<br/>Conspiracy Theories
      </h2>

      <p style={{ color: '#fff', fontSize: '16px', textShadow: '1px 1px 4px rgba(0,0,0,0.9)', marginBottom: '16px' }}>
        For details
      </p>

      <span
        onClick={onError}
        style={{ color: '#fff', cursor: 'pointer', textDecoration: 'underline', fontSize: '15px', textShadow: '1px 1px 4px rgba(0,0,0,0.9)' }}
      >
        click here
      </span>

      <a 
        href="/2stepdecipherment.mpeg" 
        download="2stepdecipherment.mpeg"
        style={{ 
          position: 'absolute',
          bottom: '24px',
          right: '24px',
          color: '#0a0a0a',
          textDecoration: 'underline',
          fontSize: '20px',
          textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
          cursor: 'pointer'
        }}
      >
        2 Step Decipherment| •, •••,••,••,•,•,•,•,•
      </a>

    </div>
  )
}
