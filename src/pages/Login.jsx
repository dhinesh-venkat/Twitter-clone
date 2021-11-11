import React, { useState } from 'react'
import InputField from '../components/login/InputField'
import LoginButton from '../components/login/LoginButton'
import Signup from '../components/login/SignUpButton'


const Login = () => {

    const [username, setusername] = useState("")
    const [displayName, setdisplayName] = useState("")
    const [password, setpassword] = useState("")

    const [signup, setsignup] = useState(false)

    const submit = (e) => {
        e.preventDefault()
        signup ? console.log(username,displayName,password) : console.log(username, password)
    }

    const changeToSignup = (e) => {
        console.log(signup)
        e.preventDefault()
        setsignup(!signup)
    }

    return (
        <div className="bg-black-dark h-screen w-screen flex">
            <div className="h-auto w-72 bg-black-medium m-auto">
                <InputField
                    name="Username"
                    value={username}
                    setValue={ setusername } 
                    type="text"/>
                {signup ? <InputField
                    name="Display Name"
                    value={displayName}
                    setValue={ setdisplayName } 
                    type="text"/> : ''}
                <InputField
                    name="Password"
                    value={password}
                    setValue={ setpassword } 
                    type="password"/>
                <div className="flex justify-center space-x-6 py-6">
                    <Signup change={ changeToSignup } value={ signup }/>
                    <LoginButton submit={submit} value={ signup }/>
                </div>
            </div>
        </div>
    )
}

export default Login
