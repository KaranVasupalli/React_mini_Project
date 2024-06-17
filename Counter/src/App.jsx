import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  const inc = ()=> {
    setCount(prevCount => prevCount + value);
  }

  const dec = ()=> {
    setCount(prevCount => prevCount - value);
  }

  const reset = ()=> {
    setCount(0)
    setValue(0)
  }

  const eventHandler = (e)=> {
    setValue(Number(e.target.value))
  }


  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={inc}>➕</button>
        <button onClick={dec}>➖</button>
        <h2>Increment/decrement by </h2>
        <input
        onChange={eventHandler}
        type="number"
        value={value}
        /><br />
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default App
