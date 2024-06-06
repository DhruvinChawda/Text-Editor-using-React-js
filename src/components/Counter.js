import { useState } from "react"
import React from 'react'

export default function Counter() {
    let [count, setCount] = useState(0)
    const addvalue=()=>{
        setCount(count+1)
    }
    const reduce=()=>{
      setCount(count-1)
    }
    const reset=()=>{
      setCount(0)
    }
    
  return (
    
    <div>
        <h2>Counter value : {count}</h2>
        <button onClick={addvalue}>
            add
        </button>
        <button onClick={reduce}>
          subtract
        </button>
        <button onClick={reset}>
          reset
        </button>
    </div>
  )
}
