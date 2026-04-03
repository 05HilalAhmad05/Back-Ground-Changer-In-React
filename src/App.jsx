import { useState } from 'react'

import './App.css'

function App() {
  let [color, setColor] = useState("red")

  return (
    <div className='h-screen w-screen flex  justify-center' style={{ backgroundColor: color}}>
      <h1 className='text-3xl font-bold underline text-center text-black'>Welcome to bgChanger</h1>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("blue")}
             className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
             style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={()=>setColor("purple")}
             className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
             style={{backgroundColor: "Purple"}}>Purple</button>
          <button onClick={()=>setColor("aqua")}
             className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
             style={{backgroundColor: "aqua"}}>Aqua</button>
          <button onClick={()=>setColor("green")}
             className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
             style={{backgroundColor: "green"}}>Green</button>
        </div>
      </div>
    </div>
  )
}

export default App
