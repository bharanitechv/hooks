import React from 'react'

function DisplaySalary({text, salary}) {
    console.log('Rendered Salary');
    return(
        <div>{text} - {salary} </div>
    )
}

export default React.memo(DisplaySalary)