import React from 'react'

const LoginButton = ({ submit, value }) => {
    return (
        <button
            onClick={ submit }
            className="bg-sky-blue h-10 w-24 text-white-primary font-bold">
                {value ? 'SIGN UP' : 'LOGIN'}</button>
    )
}

export default LoginButton
