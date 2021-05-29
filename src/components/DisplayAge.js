import React from 'react'

function DisplayAge({text, age}) {
    console.log('Rendered Age');
    return(
        <div>{text} - {age} </div>
    )
}

export default React.memo(DisplayAge)