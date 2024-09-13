import { useState } from 'react'
import AudioUploader from './AudioUploader'
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AudioUploader/>
    </>
  )
}

export default App
