import React, { useEffect, useState } from 'react'

export const UseEffectDemo = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `clicked ${count} times`
    })
    console.log("Rendered   ")
    return(
        <button onClick={() => setCount(count + 1)}>Click {count} times </button>
    )

}