import { useState } from 'react'
import './App.css'
import Index from './Index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Index></Index>
      </div>
    </>
  )
}

export default App;
