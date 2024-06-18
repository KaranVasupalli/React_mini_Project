import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')  
  const eventHandler = (e) => {
    setText(e.target.value);
  }

  return (
    <>
      <h1 className='text-center text-3xl mb-6'>Quote Generator</h1>
      <div className='flex justify-center gap-1'>
        <span>Tags:</span>
        <input
          className='border border-black'
          type="text" 
          value={text}
          onChange={eventHandler}
        />
        <h3>{text}</h3>
      </div>
    </>
  )
}

export default App
