import { Avatar } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import auth from '../authentication/auth'
import { logoutUser } from '../services/logoutUser'
import { getMyAccount, deleteAccount } from '../services/accountService'


const Profile = () => {
    const [account, setaccount] = useState({})
    const navigate = useNavigate()

    const load = () =>
        getMyAccount().then((res) => {
            if (res.status === 200) {
                setaccount(res.data)
            }
        }).catch((err) => {
            if (err.response.status === 401) {
                auth.logout(() => {
                    navigate('/login')
                })
            }
        })



    useEffect(() => {
        load()
        // eslint-disable-next-line
    }, [])

    const handleLogout = () => {
        logoutUser().then((res) => {
            if (res.status === 200) {
                auth.logout(() => {
                    navigate('/')
                })
            }
        })
    }

    const handleDelete = () => {
        deleteAccount().then((res) => {
            if (res.status === 200) {
                navigate('/')
            }
        }).catch((err) => {
            console.log(err.response);
        })
    }

    return (
        <div className="bg-black-dark flex-1 flex justify-center items-center">
            <div className="bg-black-medium flex flex-col justify-center items-center h-1/3 w-1/3 space-y-12 p-5">
                <div className=" rounded-full bg-black-light">
                    <Avatar alt="ava" src={account.avatar} sx={{ width: 100, height: 100 }} />
                </div>

                <div className="text-white text-3xl">{`Username : ${account.username}`}</div>
                <div className="text-white text-3xl">{`Display Name : ${account.displayName}`}</div>

                <div className="flex flex-row space-x-9">
                    <button
                        onClick={handleDelete} 
                        className="border border-pink-500 hover:border-pink-600 hover:text-pink-600 transition-all duration-200 text-pink-500 font-bold text-center p-3 break-normal w-24 leading-4">DELETE ACCOUNT</button>
                    <button
                        onClick={handleLogout}
                        className="bg-pink-500 text-gray-200 hover:bg-pink-600 hover:text-white transition-all duration-200 font-bold text-center p-3 ">LOG OUT</button>
                </div>
            </div>
        </div>
    )
}

export default Profile
