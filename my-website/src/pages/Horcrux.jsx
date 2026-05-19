export default function Horcrux({ onBack }) {
  return (
    <div className="page">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <h2>Horcrux</h2>
      <p>A Horcrux is a dark magical object used to hide a fragment of a witch or wizard's soul, making them immortal as long as it exists. Voldemort created seven of them.</p>
    </div>
  )
}
