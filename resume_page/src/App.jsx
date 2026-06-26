import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Landing from './components/Landing'

function App() {
  const [showMain, setShowMain] = useState(false)


  return showMain ? (
    <div className="App">
      <Header />
    </div>
  ) : (
    <>
      <Landing />
      <button onClick={() => setShowMain(true)}>Enter</button>
    </>
  )
}

export default App;
