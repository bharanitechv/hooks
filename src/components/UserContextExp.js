import React from 'react'
import { UserContext } from '../App'

function UserContextExp(){

    return(
            <div>
                <UserContext.Consumer>
                    {
                        user => {
                            return <div> User context {user}</div>
                        }
                    }
                </UserContext.Consumer>
            </div>
    )
}
export default UserContextExp