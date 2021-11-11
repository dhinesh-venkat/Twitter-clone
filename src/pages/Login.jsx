import React from 'react'
import InputField from '../components/login/InputField'

const Login = () => {
    return (
        <div className="bg-black-dark h-screen w-screen flex">
            <div className="h-80 w-72 bg-black-medium m-auto">
                <InputField name="Username"/>
                <InputField name="Password"/>
            </div>
        </div>
    )
}

export default Login
