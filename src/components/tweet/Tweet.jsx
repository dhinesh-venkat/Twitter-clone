import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import Moment from 'react-moment';
import { useNavigate } from 'react-router';
import PopupMenu from '../popup/PopupMenu';
import { deleteTweet } from '../../services/deleteTweet'
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';
import { updateTweet } from '../../services/updateTweet'


const Tweet = ({ json, hideActions, deleteItem }) => {

    const [edit, setedit] = useState(false)
    const [hide, sethide] = useState(false)
    const [content, setcontent] = useState(json.content)

    let navigate = useNavigate();
    const token = Cookies.get('token')
    const data = jwt_decode(token)

    const handleDelete = () => {

        deleteTweet(json.tweetId).then((res) => {
            if (res.status === 200) {
                deleteItem(json.tweetId)
                alert('Tweet deleted!')
            }
        }).catch((err) => {
            console.log(err.response.status);
        })

    }

    const toggleEdit = () => {
        sethide(true)
        setedit(true)
    }

    const handleUpdate = () => {
        setedit(false)
        sethide(false)
        updateTweet(json.tweetId, content, json.isPublic).then((res) => {
            if(res.status === 200) {
                alert('Success')
            }
        }).catch((err) => {
            console.log(err.response);
        })
    }

    return (
        <div className="flex border border-opacity-50 w-1/3 h-auto mb-2">

            <div className="p-5 flex flex-row justify-evenly">
                <div className="rounded-full h-12 mr-4">
                    <Avatar alt="ava" src={json.owner.avatar} sx={{ width: 30, height: 30 }} />
                </div>

                <div className="flex-col">
                    <div className="flex space-x-28">
                        <div className="flex flex-row space-x-2">
                            <div className="text-white font-bold">
                                {json.owner.displayName}
                            </div>
                            <div className="text-gray-400">
                                {json.owner.username}
                            </div>
                            <div className="text-gray-400">
                                <Moment format="MMM DD">{json.createdAt}</Moment>
                            </div>
                        </div>

                        {json.owner.userId === data.jti ? <PopupMenu onDelete={handleDelete} onEdit={toggleEdit} /> : ''}

                    </div>

                   { !edit ? <div className="text-white">{json.content}</div>
                    : <textarea
                        maxLength='255'
                        value={content}
                        onChange={(e) => setcontent(e.target.value)}
                        className=" rounded-md resize-none overflow-hidden p-2 w-full bg-black-medium h-20 outline-none text-white px-2"></textarea>}

                    {(hideActions || hide) ? '' : <div className="flex row space-x-12 mt-2">
                        <div className="flex flex-row">
                            <button className="text-red-700" >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            <div className="text-red-700">
                                {json.likes}
                            </div>
                        </div>
                        <div className="text-gray-400 hover:text-white transition duration-200">
                            <button onClick={
                                () => {
                                    navigate(`${json.tweetId}`, { state: json })
                                }
                            }>
                                Reply
                            </button>
                        </div>
                        <div className="text-gray-400">
                            Save
                        </div>
                    </div>}
                    {edit ? <div className="flex flex-row justify-end space-x-6 mt-3 items-center">
                        <div className="space-x-2">
                            <input type="checkbox" checked={json.isPublic} onChange={(e) => json.isPublic = e.target.checked} />
                            <label className="text-gray-400">Public</label>
                        </div><button
                            onClick={handleUpdate}
                            className="text-gray-100 hover:text-white transition duration-200 rounded-full text-sm flex justify-center bg-green-400 hover:bg-green-500 p-2 w-16">Update</button></div>
                        : ''}
                </div>
            </div>



        </div>
    )
}

export default Tweet
