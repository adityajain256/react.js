import { useState } from 'react' 

function App() {
   let [count, setCount] = useState(0)

     function addValue(){
      (count<20)? setCount(count + 1): alert("Count should be less then 21");
     }
     function decrease(){
      (count>0)? setCount(count - 1): alert("Negative numbers are not acceptable");
     }



  return (
    <>
      <h1>aditya jain</h1>
      <h1>counting {count}</h1>
      <button 
        onClick={addValue}
      >Increase</button>
      <button
        onClick={decrease}
      >Decrease</button>
    </>
  )
}

export default App
