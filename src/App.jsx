import { useState } from "react"

export default function App() {
  const [count , setCount] = useState(0);
  const increase = () =>{
    setCount(count + 1);
  }
  const decrease = () =>{
    setCount(count - 1);
  }
  const setDefault = () =>{
    setCount(0);
  }
  return (
    <div className='flex flex-col items-center bg-gradient-to-r from-zinc-800 via-zinc-900 to-slate-950 h-lvh'>
      <div id="header" className='text-7xl font-bold cursor-pointer hover:text-8xl duration-150 ease-in-out'>
        <div id="gradientText" className="bg-gradient-to-r from-orange-500 via-green-600 to-purple-600 inline-block text-transparent bg-clip-text h-30 my-4 p-4">Counter Project</div>
      </div>
      <div id="counter" className="text-7xl font bold m-12 p-4 font-bold text-sky-500">{count}</div>

      <div id="buttons" className="flex flex-row gap-4 m-4">
        <button onClick={()=>increase()} className="bg-gradient-to-r from-purple-500 to-sky-500 font-bold text-xl text-white p-2 rounded-2xl hover:px-4 duration-100 ease-in-out">Increase</button>
        <button onClick={()=>decrease()} className="bg-gradient-to-r from-purple-500 to-sky-500 font-bold text-xl text-white p-2 rounded-2xl hover:px-4 duration-100 ease-in-out">Decrease</button>
        <button onClick={()=>setDefault()} className="bg-gradient-to-r from-purple-500 to-sky-500 font-bold text-xl text-white p-2 rounded-2xl hover:px-4 duration-100 ease-in-out">Default</button>
      </div>
      <div id="credits" className="font-mono text-xl text-slate-50 mt-14">Created by Triparno Das</div>
    </div>
  )
}
