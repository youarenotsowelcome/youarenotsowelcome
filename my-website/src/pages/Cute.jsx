export default function Cute({ onBack }) {
  return (
    <div className="page">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <h2>Cute</h2>
      <p>Cuteness is a subjective quality of attractiveness — often associated with small, soft, and innocent things like puppies, kittens, and babies. Science says we're wired to respond to it!</p>
    </div>
  )
}
