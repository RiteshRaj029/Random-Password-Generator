
import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  let [num,setNum] = useState(false)
  let [splchars,setSplchars] = useState(false)
  let [length,setLength] = useState("8")
  let [password,setPassword] = useState("")

  let passgen = useCallback(()=>{
    let pass =""
    let strng = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(num){
      strng += '0123456789'
    }
    if(splchars){
      strng += '!@#$%^&*()_-+=<>?'
    }

    for (let i = 0; i < length ; i++) {
      let index = Math.floor(Math.random() * strng.length)
      pass += strng.charAt(index)
    }
    setPassword(pass)
  },[length,splchars,num]) 

  useEffect(()=>{passgen()},[length,num,splchars])

  return (
    <div className='container'>
    <h1>Random Password Generator</h1>
    <div className='container1'>
    <label htmlFor='password'>Password: </label>
    <input type="text" name='password' placeholder='password' value={password}/>
    </div>
    <div className='container2'>
    <input type='range' name='length' min={8} max={24} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
    <label htmlFor='length'>Length: {length} </label>
    
    <label htmlFor='num'>Number</label>
    <input type='checkbox' name='num' onChange={()=>{setNum((prev)=>(!prev))}}/>
    
    <label htmlFor='spchars'>Special Chars</label>
    <input type='checkbox' name='spchars' onChange={()=>{setSplchars((prev)=>(!prev))}}/>
    </div>
    </div>
  );
}

export default App;
