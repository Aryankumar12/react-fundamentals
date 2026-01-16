import React from 'react'
import { useState } from 'react'
const App = () => {


  const [name, setName] = useState('')

  const handleClick = ()=>{
    alert(`Your name is ${name}`)
  }
  return (
   <>
    <h2>Your Name : {name}</h2>
    <input type='text' value={name} onChange={(e)=> setName(e.target.value) }/>
    <button onClick={handleClick}>Click Me</button>
   </>
  )
}

export default App