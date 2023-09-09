import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestingVideo from './assets/testing.mp4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ position: 'relative' }}>
        <video width="750" height="500" autoPlay muted loop playsInline>
          <source src={TestingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }} onClick={() => alert('holla')}>TESTING BRO</h1>
      </div>
      {/* <h1>Vite + React</h1> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p> 
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
