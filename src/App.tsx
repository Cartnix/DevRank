import { useState } from 'react'
import Landing from './features/landing'
import TestForm from './features/landing/ui/TestForm'
import './App.css'

function App() {
  const [page, setPage] = useState<'landing' | 'test'>('landing')

  return page === 'landing' ? (
    <Landing onTestClick={() => setPage('test')} />
  ) : (
    <TestForm onBack={() => setPage('landing')} />
  )
}

export default App
