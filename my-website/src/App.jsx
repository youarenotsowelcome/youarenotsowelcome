import { useState } from 'react'
import Home from './pages/Home'
import Horcrux from './pages/Horcrux'
import Planets from './pages/Planets'
import Cute from './pages/Cute'
import Dead from './pages/Dead'
import DonaPaula from './pages/DonaPaula'
import './App.css'

const PAGES = {
  horcrux: Horcrux,
  planets: Planets,
  cute: Cute,
  dead: Dead,
  'dona paula': DonaPaula,
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleSearch = (query) => {
    const key = query.trim().toLowerCase()
    if (PAGES[key]) {
      setCurrentPage(key)
    } else {
      setCurrentPage('error:' + query)
    }
  }

  if (currentPage === 'home') {
    return <Home onSearch={handleSearch} />
  }

  if (currentPage.startsWith('error:')) {
    const query = currentPage.replace('error:', '')
    return (
      <div className="error-page">
        <p className="error-msg">❌ "{query}" not found. Try: Horcrux, Planets, Cute, Dead, Dona Paula.</p>
        <button onClick={() => setCurrentPage('home')}>← Go back</button>
      </div>
    )
  }

  const PageComponent = PAGES[currentPage]
  return <PageComponent onBack={() => setCurrentPage('home')} />
}
