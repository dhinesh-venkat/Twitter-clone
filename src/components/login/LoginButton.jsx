import React from 'react'

const LoginButton = ({ submit, value }) => {
    return (
        <button
            onClick={ submit }
            className="bg-sky-blue h-10 w-24 text-gray-200 hover:text-white font-bold">
                {value ? 'SIGN UP' : 'LOGIN'}</button>
    )
}

export default LoginButton
