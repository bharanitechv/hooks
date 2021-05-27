import React, { useContext } from 'react'
import { UserContext } from '../App'

function SimplerContextUsage(){
    const testContext = useContext(UserContext)
    return(
        <div>{testContext}</div>
    )
}
export default SimplerContextUsage