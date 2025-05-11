import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center">
        <h1 className='bg-red-500 text-3xl font-bold underline text-green-200'>aditya jain</h1>
      </div>
      <div className='flex justify-center my-10 '>
        <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded'
        onClick={()=> alert('hello')}
        >click me</button>
      </div>
    </>
  )
}

export default App
