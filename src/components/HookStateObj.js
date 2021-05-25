import React, { useState } from 'react'

export const HookStateObj = () => {
    const [name, setName] = useState({firstName:'', lastName:''})
    return(
        <form>
            <input type='text' value={name.firstname} onChange={e => setName({...name, firstName:e.target.value})}/>
            <input type='text' value={name.lastName} onChange={e=> setName({...name , lastName:e.target.value})}/>
            <div>first name - {name.firstName}</div>
            <div>Last name - {name.lastName}</div>
        </form>
    )
}
//Use spread operator to copy the existing value
//useState replace the existing state value but class state will merge the value.
//setName({...name, firstName:e.target.value})
