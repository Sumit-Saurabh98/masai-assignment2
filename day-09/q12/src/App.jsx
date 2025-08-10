import { useState } from 'react'
import './App.css'

function App() {
  const [state, setState] = useState(["React", "Javascript", "CSS"])

  return (
    <>
      <h1>My Skills</h1>
      <ul>
        {state.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  )
}

export default App
