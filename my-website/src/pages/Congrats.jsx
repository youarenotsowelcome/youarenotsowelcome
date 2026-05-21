export default function Congrats({ onBack }) {
  return (
    <div className="page" style={{ background: '#0a0a0a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', padding: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid #333' }}>
        <h2 style={{ fontSize: '48px', color: '#ffd700', fontFamily: 'Cinzel, serif', marginBottom: '20px' }}>🏆 Congratulations!</h2>
        <p style={{ color: '#fff', fontSize: '18px', lineHeight: '1.8', marginBottom: '12px' }}>You have reached the very end.</p>
        <p style={{ color: '#aaa', fontSize: '15px', lineHeight: '1.8', marginBottom: '32px' }}>Not many make it here. You are one of the few who was truly not so welcome — yet came anyway.</p>
        <p style={{ color: '#aaa', fontSize: '15px', lineHeight: '1.8', marginBottom: '32px' }}>Also it took me some expenses to buy a domain for my website. If you liked this game of decipher, I would be obliged if the winners could a liitle. Contribution of 20-30 Rs will be appreciated</p>
        <p style={{ color: '#aaa', fontSize: '15px', lineHeight: '1.8', marginBottom: '32px' }}>Here are the payment details<br/>UPI ID: ruturaj.alornekar.1-1@oksbi<br/>Thank You</p>
        <button className="back-btn" onClick={onBack} style={{ margin: '0 auto' }}>← Go back home</button>
      </div>
    </div>
  )
}