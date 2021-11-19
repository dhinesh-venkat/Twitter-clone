import React, { useState } from 'react'
import InputField from '../components/login/InputField'
import LoginButton from '../components/login/LoginButton'
import Signup from '../components/login/SignUpButton'
import auth from '../authentication/auth'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/loginUser'
import Cookies from 'js-cookie'


const Login = () => {

    const navigate = useNavigate()

    const [username, setusername] = useState("")
    const [displayName, setdisplayName] = useState("")
    const [password, setpassword] = useState("")

    const [signup, setsignup] = useState(false)

    const submit = (e) => {
        e.preventDefault()
        signup ? console.log(username,displayName,password) : handleLogin()
    }

    const changeToSignup = (e) => {
        console.log(signup)
        e.preventDefault()
        setsignup(!signup)
    }

    const handleLogin = () => {

        login(username,password).then((res) => {
            console.log(res.status)
            if(res.status === 200) {
                Cookies.set('token',res.data)
                auth.login(() => {
                    navigate('/app/tweets')
                })
            }
            
        }).catch((err) => {
            console.log('error occured');
            console.log(err)
        })
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
