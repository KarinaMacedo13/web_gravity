import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button type="button" className="btn btn-primary">Primary</button>
    </div>
  )
}

export default App
