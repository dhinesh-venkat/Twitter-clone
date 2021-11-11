import React from 'react'

const SignUpButton = ({ change, value }) => {
    return (
        <button
        onClick={ change }
            className="bg-black-light h-10 w-24 text-white-primary font-bold">
                {value ? 'LOGIN' : 'SIGN UP'}</button>
    )
}

export default SignUpButton
