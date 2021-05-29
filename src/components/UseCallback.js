import React, { useCallback, useState } from 'react'
import Button from './Button'
import DisplayAge from './DisplayAge'
import DisplaySalary from './DisplaySalary'

function UseCallback(){
    const [age, setAge] = useState(1)
    const [salary, setSalary] = useState(1000)
    const handleAge = useCallback(() => {
        setAge(age + 1)
    }, [age])
    const  handleSalary = useCallback(() => {
        setSalary(salary+ 1000)
    }, [salary])
    return(
        <div>
            <Button handleClick={handleAge}>Increment Age - {age}</Button>
            <DisplayAge text='Age'age={age}/>
            <Button handleClick={handleSalary}>Increment Salary - {salary}</Button>
            <DisplaySalary text='Salary' salary={salary}/>
        </div>
    )
}

export default UseCallback