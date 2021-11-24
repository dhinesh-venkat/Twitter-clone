import { Avatar, Divider } from '@mui/material'
import { React, useState } from 'react'
import auth from '../../authentication/auth'
import { postTweet } from '../../services/postTweet'
import { useNavigate } from 'react-router-dom'


const CreateTweet = ({ show, toggleModal }) => {
    const [tweetContent, settweetContent] = useState("")
    const [isPublic, setisPublic] = useState(true)
    const [showModal, setshowModal] = useState(show)
    const navigate = useNavigate()

    function togglePublic() {
        setisPublic(!isPublic)
    }

    function hide(e) {
        setshowModal(false)
        toggleModal()
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        postTweet(tweetContent, isPublic).then((res) => {
            if (res.status === 200) {
                toggleModal()
                window.location.reload();
            }

        }).catch((err) => {
            if (err.status === 401) {
                auth.logout(() => {

                    navigate('/login')
                })
            }
        })
    }

    return (
        <div className={`h-full w-full fixed z-40 m-auto items-center justify-center backdrop-filter backdrop-blur-sm ${showModal ? 'flex' : 'hidden'}`}>
            <div className="bg-black-dark rounded-3xl flex flex-col w-1/3 h-auto border border-opacity-10">
                <button className="text-white text-2xl p-3" onClick={hide}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>

                <Divider className="bg-white-primary" />

                <div className="p-3 flex flex-col">

                    <div className="flex flex-row">
                        <Avatar alt="ava" src="https://avatars.dicebear.com/api/avataaars/elonmusk.svg" sx={{ width: 30, height: 30 }} />
                        <textarea
                            maxLength='255'
                            placeholder="What's happening?"
                            value={tweetContent}
                            onChange={(e) => settweetContent(e.target.value)}
                            className=" rounded-md resize-none overflow-hidden p-2 w-full bg-transparent h-20 outline-none text-white px-2"></textarea>
                    </div>

                    <div className="flex flex-row justify-end space-x-6 mt-3 items-center">
                        {/* <div className="space-x-2">
                            <input type="checkbox" checked={isPublic} onChange={togglePublic} />
                            <label className="text-gray-400">Public</label>
                        </div> */}
                        <button
                            onClick={handleSubmit}
                            className="text-gray-100 hover:text-white transition duration-200 rounded-full text-sm flex justify-center bg-green-400 hover:bg-green-500 p-2 w-16">Tweet</button>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default CreateTweet
