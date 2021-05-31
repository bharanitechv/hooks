import React, { useState } from 'react'
import useCounter from './useCounter'

function CustomHookCounter(){
   const [count, increment] = useCounter()
    return(
        <div>
            <button onClick={increment}>Increment Counter - {count}</button>
            <div>Environment - { process.env.REACT_APP_TEST}</div>
            
               
            
        </div>
    )
}
export default CustomHookCounter