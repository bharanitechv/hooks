import React, { useState } from 'react'

export const HookState = () => {
    const initialState = 0
    const [count, setCount] = useState(initialState)
    const incrementFive = () =>{
        for(let i=0; i < 5;i++){
            //setCount(count + 5) Not correct approach
            setCount(prevCount => prevCount + i)
        }
    }
    return(
        <div>
            Count - {count}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
            <button onClick={() => setCount(initialState)}>Reset</button>
        </div>
    )
}