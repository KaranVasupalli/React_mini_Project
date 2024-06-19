import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('#ffffff')
  // const colors = ['red', 'blue', 'green', 'yellow']

  const changeColor = ()=>{
    // const nextColor = colors[Math.floor(Math.random() * colors.length)]
    const nextColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(nextColor);
  }

  return (
    <>
      <div style={{ backgroundColor: color, minHeight: '100vh' }} >
        <div className=' bg-slate-400 h-12 flex justify-center items-center'>
          <h1>Background Changer</h1>
        </div>
        <div className=' flex justify-center mt-5'>
          <button className='px-4 py-2 bg-red-600 rounded-md text-white' onClick={changeColor}>Change Color</button>
        </div>
      </div>
    </>
  )
}

export default App
