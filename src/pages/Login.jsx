import React, { useState } from 'react'
import InputField from '../components/login/InputField'
import LoginButton from '../components/login/LoginButton'
import Signup from '../components/login/SignUpButton'
import auth from '../authentication/auth'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/loginUser'
import { signupUser } from '../services/signup'
import Cookies from 'js-cookie'
import { encode } from 'base-64'


const Login = () => {
    const navigate = useNavigate()

    const [username, setusername] = useState("")
    const [displayName, setdisplayName] = useState("")
    const [password, setpassword] = useState("")

    const [signup, setsignup] = useState(false)

    const submit = (e) => {
        e.preventDefault()
        signup ? handleSignup() : handleLogin()
    }

    const changeToSignup = (e) => {
        console.log(signup)
        e.preventDefault()
        setsignup(!signup)
    }

    const handleLogin = () => {

        login(username,encode(password)).then((res) => {
            console.log(res.status)
            if(res.status === 200) {
                console.log(res.data.message_response.authentication.auth_data.auth_token)
                Cookies.set('token',res.data.message_response.authentication.auth_data.auth_token)
                auth.login(() => {
                    window.location.reload();
                    navigate('/app/tweets')
                })
            }
            
        }).catch((err) => {
            if(err.response.status === 403) {
                alert('Wrong Credentials')
            } 
        })
    }

    const validUsername = (text) => {
        const noSpace = /^\S*$/
        const startsWith = /(^|[^@\w])@(\w{1,15})\b/

        if(text.match(noSpace)){
            if(text.match(startsWith)){
                return true;
            }
        }

        return false;
    }

    const handleSignup = () => {
        const valid = validUsername(username)
        if(valid) {
            signupUser(username,displayName,password).then((res) => {
                if(res.status === 200) {
                    alert('Success')
                    setsignup(false)
                }
                
            }).catch((err) => {
                console.log('error occured');
                console.log(err)
            })
        } else {
            alert('Username must not contain spaces and must start with @')
        }
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
