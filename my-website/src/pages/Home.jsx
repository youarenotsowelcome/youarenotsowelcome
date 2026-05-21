import { useState } from 'react'

export default function Home({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSubmit = () => {
    if (query.trim()) onSearch(query.trim())
  }

  return (
    <div className="home">
      <h1 className="title">You Are Not So Welcome</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      <p  className="hint">Search for any code which you decipher over here</p>

    </div>
  )
}
