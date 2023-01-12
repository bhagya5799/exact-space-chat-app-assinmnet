import React from 'react'

const UserNames = (props) => {
    const { details, onClickUserNames } = props
    const getUserName =() => {
        onClickUserNames(details)
    }
    return (
        (
            <div>
                <h4 onClick={getUserName}>{details}</h4>
            </div>
        )
    )
}
export default UserNames