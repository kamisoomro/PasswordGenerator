import { useCallback, useState,useEffect } from 'react'
import './App.css'
function App() {
  const [length,setLength] = useState(5);
  const [number,setNumber] = useState(false)
  const [charactar, setCharactar] = useState(false)
  const [password,setPassword] = useState('')
  const passwordGanerator = useCallback(()=>{
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let pass = ''
    if(number) str+= "0123456789"
    if(charactar) str+="!@$%&*)(><?:{][}"
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,number,charactar])
  
useEffect(()=>{
  passwordGanerator()
},[length,number,charactar,passwordGanerator])
let copyPassword = useCallback(()=>{
  window.navigator.clipboard.writeText(password)
},[password]) 
  return (
    <div className="flex justify-center items-center h-screen">
  <div className="bg-white p-6 rounded-lg shadow-lg w-96">
    <h1 className="text-2xl font-semibold mb-4">Password Generator</h1>
    <div className="mb-4">
      <label htmlFor="password" className="block text-sm mb-1">Your Password:</label>
      <input
        id="password"
        type="text"
        value={password}
        readOnly
        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        placeholder="Your Password"
      />
    </div>
    <div className='mb-4'>
    <button onClick={copyPassword} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
<button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Copy</button>
    </div>
    <div className="mb-4">
      <label htmlFor="length" className="block text-sm mb-1">Length:</label>
      <input
        id="length"
        type="range"
        min={5}
        max={50}
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className="w-full cursor-pointer"
      />
      <span className="text-sm">{length}</span>
    </div>
    
    <div className="mb-4">
      <input
        id="includeNumbers"
        type="checkbox"
        checked={number}
        onChange={() => setNumber((prev) => !prev)}
        className="mr-2"
      />
      <label htmlFor="includeNumbers" className="text-sm">Include Numbers</label>
    </div>
    <div className="mb-4">
      <input
        id="includeSpecialChars"
        type="checkbox"
        checked={charactar}
        onChange={() => setCharactar((prev) => !prev)}
        className="mr-2"
      />
      <label htmlFor="includeSpecialChars" className="text-sm">Include Special Characters</label>
      
    </div>
    
  </div>
</div>

  )
}

export default App
